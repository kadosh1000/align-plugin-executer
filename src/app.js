const request = require("request");
const uuidv4 = require("uuid").v4;

/*const processes = {
    "8b40a89e-a4b3-4e4f-9368-3e16c8ae228e": [
        {
            status: "done",
            startNode: true,
        },
    ],
    "795fc30c-eaa9-4b5d-966b-cd745a05313f": [
        {
            processId: "606dd6110212a5001866641b",
            iterationIndex: 0,
            status: "done",
            uuid: "795fc30c-eaa9-4b5d-966b-cd745a05313f",
            actions: {
                "6087fa5ca2ab2d0035c83727": {
                    retries: 0,
                    mandatory: null,
                    isEnabled: true,
                    params: [
                        {
                            _id: "6087fa5ca2ab2d0035c83728",
                            code: true,
                            value: "wcm_admin_user()",
                            param: "606e8faf0212a50018a2df7b",
                            name: "username",
                        },
                        {
                            _id: "6087fa5ca2ab2d0035c83729",
                            code: true,
                            value: "wcm_admin_password()",
                            param: "606e8faf0212a50018a2df7c",
                            name: "password",
                        },
                        {
                            _id: "6087fa5ca2ab2d0035c8372a",
                            code: null,
                            value: "wcm_cr",
                            param: "606e8faf0212a50018a2df7d",
                            name: "wcm",
                        },
                    ],
                    _id: "6087fa5ca2ab2d0035c83727",
                    name: "Action #1 ",
                    timeout: null,
                    method: "Login",
                    numParallel: null,
                    actionExecutionId: "f1bfb41d-bf33-4598-a52a-35c5f5cf5bd0-1619524189394",
                    action: "6087fa5ca2ab2d0035c83727",
                    startTime: "2021-04-27T11:49:49.394Z",
                    retriesLeft: 0,
                    status: "success",
                    result: {
                        stdout: "+ wcm_global - Login: username: iterobiz-test1@aligntech.com, password: Dontusedefaultpassw0rds, wcm: wcm_cr",
                        stderr: "",
                        result: JSON.stringify({
                            name: "Login",
                            params: { user_name: "iterobiz-test1@aligntech.com", password: "Dontusedefaultpassw0rds", wcm: "wcm_cr" },
                        }),
                    },
                    finishTime: "2021-04-27T11:49:49.454Z",
                },
                "6087fa5ca2ab2d0035c8372b": {
                    retries: 0,
                    mandatory: null,
                    isEnabled: true,
                    params: [
                        {
                            _id: "6087fa5ca2ab2d0035c8372c",
                            code: null,
                            value: "100",
                            param: "606e8faf0212a50018a2df7f",
                            name: "Manual_review_iCast",
                        },
                        {
                            _id: "6087fa5ca2ab2d0035c8372d",
                            code: null,
                            value: "false",
                            param: "606e8faf0212a50018a2df80",
                            name: "Automatic_iCast",
                        },
                    ],
                    _id: "6087fa5ca2ab2d0035c8372b",
                    name: "Action #2 ",
                    timeout: null,
                    method: "Config_WCM_CR",
                    numParallel: null,
                    actionExecutionId: "26ada6f2-458d-44f7-bcda-893e1d05beb7-1619524189460",
                    action: "6087fa5ca2ab2d0035c8372b",
                    startTime: "2021-04-27T11:49:49.460Z",
                    retriesLeft: 0,
                    status: "success",
                    result: {
                        stdout: "+ wcm_global - Config_WCM_CR: Manual_review_iCast: 100, Automatic_iCast: false",
                        stderr: "",
                        result: JSON.stringify({ name: "Config_WCM_CR", params: { Automatic_iCast: false, Manual_review_iCast: 100 } }),
                    },
                    finishTime: "2021-04-27T11:49:49.512Z",
                },
            },
            startTime: "2021-04-27T11:49:49.375Z",
            processIndex: 0,
            processName: "Process #1",
            finishTime: "2021-04-27T11:49:49.518Z",
        },
    ],
    "def14f53-1260-45ae-94ff-68117252a357": [
        {
            processId: "605c76b9bde46000114ecad8",
            iterationIndex: 0,
            status: "running",
            uuid: "def14f53-1260-45ae-94ff-68117252a357",
            actions: {
                "6087fa5ca2ab2d0035c8370c": {
                    retries: 0,
                    mandatory: null,
                    isEnabled: true,
                    params: [
                        {
                            _id: "6087fa5ca2ab2d0035c8370d",
                            code: true,
                            value: "printProcesses()",
                            param: null,
                            name: "COMMANDS",
                        },
                    ],
                    _id: "6087fa5ca2ab2d0035c8370c",
                    name: "Action #1 ",
                    timeout: null,
                    method: "execute",
                    numParallel: null,
                    actionExecutionId: "831c8926-d72c-401f-bdbe-ca4027c61416-1619524189543",
                    action: "6087fa5ca2ab2d0035c8370c",
                    startTime: "2021-04-27T11:49:49.543Z",
                    retriesLeft: 0,
                    status: "running",
                },
            },
            startTime: "2021-04-27T11:49:49.526Z",
            processIndex: 1,
            processName: "Process #2",
        },
    ],
};

const configuration = {
    uuid: "",
    uniqe_suffix: "",
    name: "iCast_model_E2E",
    order_id: "",
    debug_report_name: "PPR_logs",
    test: "ITEROBIZ-56501 - iCast full flow - EU region",
    environment: "ppr",
    unique_scanner: false,
    scanner_agent_tags: "",
    worker_number: 1,
    json_folder: "",
    current_stage: "stage_1",
};

const json = getMessageJson(processes,configuration,"");
console.log(json);
*/
function getMessageJson(processes, configuration, trigger) {
    var index = 1;
    configuration.uuid = uuidv4();
    configuration.trigger = trigger || "";
    Object.keys(processes).forEach((key) => {
        try {
            var skey = Object.keys(processes[key][0]["actions"])[0];
            var pluginName = processes[key][0]["actions"][skey].result.stdout.split(' - ')[0].split('+ ')[1];
            // var pluginName = processes[key][0]["actions"][skey]["plugin"]["name"];
            var stage = pluginName;
            var isBuildinBlockMandatory = "No";

            if (
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
                    //Save Method Name and prameters
                    var tmpJson = JSON.parse(processes[key][0]["actions"][skey]["result"]["result"]);
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
                    configuration[`stage_${index}`] = JSON.parse(`{"methods":[],"iterolab_methods":[]}`);
                    configuration[`stage_${index}`]["methods"].push(methods.filter((e) => e.name == "Login")[0]);
                    configuration[`stage_${index}`]["methods"].push(methods.filter((e) => e.name == "OpenITeroLab")[0]);

                    methods.forEach((method) => {
                        if (method.name != "Login" && method.name != "OpenITeroLab") configuration[`stage_${index}`]["iterolab_methods"].push(method);
                    });
                } else {
                    configuration[`stage_${index}`] = JSON.parse(`{"methods":[]}`);
                    configuration[`stage_${index}`]["methods"] = methods;
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
            //configuration.Error =  err;
        }
    });

    //last step goes to report queue
    configuration[`stage_${index - 1}`].next_step = "reports";
    return configuration;
}


async function sendRequest(vhost, queue, message, kaholoUrl){
  // return {
  //   vhost, queue, message, url : `${kaholoUrl}/rabbitmq/webhook`
  // }
  
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

  return sendRequest(vhost,queue,message, settings.kaholoUrl);
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
