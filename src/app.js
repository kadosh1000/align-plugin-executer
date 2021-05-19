const request = require("request");
const uuidv4 = require("uuid").v4;

function getMessageJson(processes, configuration, trigger) {
    var index = 1;
    configuration.uuid = uuidv4();
    configuration.trigger = trigger || "";
    Object.keys(processes).forEach((key) => {
        try {
            const actions = processes[key][0]["actions"];
            if (!actions) return;
            
            var skey = Object.keys(processes[key][0]["actions"])[0];
            if(!processes[key][0]["actions"][skey].result) return;
            
            var pluginName = processes[key][0]["actions"][skey].result.stdout.split(' - ')[0].split('+ ')[1];
            // var pluginName = processes[key][0]["actions"][skey]["plugin"]["name"];
            var stage = pluginName;
            var isBuildinBlockMandatory = "No";

            if (
                stage.startsWith("MAT") || 
                stage.startsWith("myitero") ||
                stage.startsWith("myaligntech-actions") ||
                stage.startsWith("wcm_global") ||
                stage.startsWith("db") ||
                stage.startsWith("itero-lab")
            ) {
                // this code taking multipile actions int the json
                //Save All methods
                var methods = [];
                Object.keys(processes[key][0]["actions"]).forEach((skey) => {
                    //Try get mandatory_block value
                    var tmp = processes[key][0]["actions"][skey]["params"]["mandatory_block"];
                    if (tmp != undefined) {
                        isBuildinBlockMandatory = tmp;
                    }

                    var tmpJson;
                    //Save Method Name and prameters
                    try{
                        tmpJson = JSON.parse(processes[key][0]["actions"][skey]["result"]["result"]);
                    } catch(err){
                        throw `Could not parse action '${processes[key][0]["actions"][skey].name}' on '${processes[key][0].processName}': ${err}`;
                    }
                    
                    
                    //Add retires from current action
                    tmpJson.retries = processes[key][0]["actions"][skey]["retries"] == 0 ? 1 : processes[key][0]["actions"][skey]["retries"];
                    //Add mandatory from current action
                    tmpJson.mandatory =
                        processes[key][0]["actions"][skey]["mandatory"] == null ? false : processes[key][0]["actions"][skey]["mandatory"];

                    //If action is enabled add if to list
                    var isEnabled = JSON.parse(processes[key][0]["actions"][skey]["isEnabled"]);
                    if (isEnabled != false) {
                        methods.push(tmpJson);
                    }
                });

                if (stage.startsWith("itero-lab") == true) {
                    configuration[`stage_${index}`] = {
                        "methods":[],
                        "iterolab_methods":[]
                    };
                    configuration[`stage_${index}`]["methods"].push(methods.filter((e) => e.name == "Login")[0]);
                    configuration[`stage_${index}`]["methods"].push(methods.filter((e) => e.name == "OpenITeroLab")[0]);

                    methods.forEach((method) => {
                        if (method.name != "Login" && method.name != "OpenITeroLab") 
                            configuration[`stage_${index}`]["iterolab_methods"].push(method);
                    });
                } else {
                    methods.forEach(method=>{
                        method = formatEmptyFields(method);
                        for(let param in method.params){
                            if (!method.params[param] || method.params[param]==='null')
                                method.params[param] = '';
                        } 
                    })

                    configuration[`stage_${index}`]={
                        "methods": methods
                    }
                }

                //Add Stage fields
                configuration[`stage_${index}`]["stage"] = pluginName;
                configuration[`stage_${index}`]["status"] = "";

                if (isBuildinBlockMandatory == "Yes") {
                    configuration[`stage_${index}`]["mandatory"] = true;
                } else {
                    configuration[`stage_${index}`]["mandatory"] = false;
                }
                //set next step for previuse action
                if (index > 1) {
                    configuration[`stage_${index - 1}`].next_step = configuration[`stage_${index}`]["stage"];
                }
                index++;
            } else {
                //Old code taking only first action
                var actionJson = JSON.parse(processes[key][0]["actions"][skey]["result"]["result"]);

                actionJson = formatEmptyFields(actionJson);

                //Add new stage
                configuration[`stage_${index}`] = actionJson;

                //Set Manadatory
                configuration[`stage_${index}`]["mandatory"] =
                    processes[key][0]["actions"][skey]["mandatory"] == null || processes[key][0]["actions"][skey]["mandatory"] == false
                        ? false
                        : true;

                //set 'next step' field for previuse action
                if (index > 1) {
                    configuration[`stage_${index - 1}`].next_step = actionJson.stage;
                }
                index++;
            }
        } catch (err) {
            throw err;
            // console.error(err);
            //configuration.Error =  err;
        }
    });

    //last step goes to report queue
    configuration[`stage_${index - 1}`].next_step = "reports";
    return configuration;
}

function formatEmptyFields(obj){
    for (let key in obj){
        if(obj[key] === 'null' || obj[key] === null){
            obj[key] = '';
        }
    }
    return obj;
}


async function sendRequest(vhost, queue, message, kaholoUrl){
  var body = { 
    vhost : vhost, 
    queue : queue, 
    message : message
  };
  
  var requestOptions = {
    url:  `${kaholoUrl}/rabbitmq/webhook`,
    method: 'POST',
    json: true,
    body : body
  }
  
  return new Promise ((resolve,reject)=>{
      request(requestOptions, function(err, res, body) {
          if (err){
              return reject(`Err: Queue: ${queue} , Vhost: ${vhost}, Err Message: ${err}`);
          }
          try{
              let response = JSON.stringify(body);
              if (response.substring(1,3) === 'OK'){
                  return resolve("Debug: Request has been sent successfully");
              }
              
              return reject(`Err: Queue: ${queue} , Vhost: ${vhost}, http response: ${response}`);
          }
          catch(err){
              console.log(`Err: Queue: ${queue} , Vhost: ${vhost}, Err Message: ${err.message}`);
              reject(`Err: Queue: ${queue} , Vhost: ${vhost}, Err Message: ${err.message}`);
          }
      });
  });
}

async function alignExecute(action, settings){
  const message = getMessageJson(action.params.processes, action.params.alignConfiguration, action.params.executeTrigger);
  
  if (!message.stage_1)
    throw "Must be at least 1 stage";

  const vhost = action.params.alignEnvironment || "";
  
  const queue = action.params.alignQueue || message.stage_1.stage || message[message.current_stage].stage;

  if (action.params.dryRun !== true && action.params.dryRun !== 'true')
    await sendRequest(vhost,queue,message, settings.kaholoUrl);
  
  return {uuid: message.uuid};
}

async function alignPost(action, settings){
  const vhost = action.params.alignEnvironment || "";
  
  const queue = action.params.alignQueue || message.stage_1.stage || message[message.current_stage].stage;

  return sendRequest(vhost,queue, action.params.message, settings.kaholoUrl);
}

module.exports = {
    alignExecute: alignExecute,
    alignPost: alignPost
};

/**
 * The test data is in a seperate file to keep this file clean.
 * Uncomment the code section to run tests.
 */

// const { configuration, processes } = require('./test-data')
// const json = getMessageJson(processes,configuration,"");
// console.log(json);