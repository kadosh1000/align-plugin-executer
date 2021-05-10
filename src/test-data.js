/**
 * Here is some test data in order to test the `getMessageJson` method
 */
 const processes = {
    "8b40a89e-a4b3-4e4f-9368-3e16c8ae228e": [
        {
            "status": "done",
            "startNode": true
        }
    ],
    "70c1e598-f72a-4ab0-afa2-78959c47e5ad": [
        {
            "processId": "6088031ba2ab2d0035cb273b",
            "iterationIndex": 0,
            "status": "done",
            "uuid": "70c1e598-f72a-4ab0-afa2-78959c47e5ad",
            "actions": {
                "6088031ba2ab2d0035cb273c": {
                    "retries": 0,
                    "mandatory": null,
                    "isEnabled": true,
                    "params": [
                        {
                            "_id": "6088031ba2ab2d0035cb273d",
                            "code": true,
                            "value": "wcm_admin_user()",
                            "param": null,
                            "name": "username"
                        },
                        {
                            "_id": "6088031ba2ab2d0035cb273e",
                            "code": true,
                            "value": "wcm_admin_password()",
                            "param": null,
                            "name": "password"
                        },
                        {
                            "_id": "6088031ba2ab2d0035cb273f",
                            "code": null,
                            "value": "60589ed16f02ea0011c58960",
                            "param": null,
                            "name": "mandatory_block"
                        }
                    ],
                    "_id": "6088031ba2ab2d0035cb273c",
                    "name": "Action #1 ",
                    "timeout": null,
                    "method": "Login",
                    "numParallel": null,
                    "actionExecutionId": "8540b52e-0edc-4bf9-b64d-c5a76e57ba29-1620654317416",
                    "action": "6088031ba2ab2d0035cb273c",
                    "startTime": "2021-05-10T13:45:17.416Z",
                    "retriesLeft": 0,
                    "status": "success",
                    "result": {
                        "stdout": "+ myitero-lab - Login: username: , password: , mandatory_block: undefined",
                        "stderr": "",
                        "result": JSON.stringify({"name": "Login","params": {"user_name":"","password": "","mandatory_block": false}})
                    },
                    "finishTime": "2021-05-10T13:45:17.487Z"
                },
                "6088031ba2ab2d0035cb2740": {
                    "retries": 0,
                    "mandatory": null,
                    "isEnabled": true,
                    "params": [
                        {
                            "_id": "6088031ba2ab2d0035cb2741",
                            "code": null,
                            "value": null,
                            "param": null,
                            "name": "order_id"
                        }
                    ],
                    "_id": "6088031ba2ab2d0035cb2740",
                    "name": "Action #2 ",
                    "timeout": null,
                    "method": "Search_Order",
                    "numParallel": null,
                    "actionExecutionId": "f355c353-fd9d-4179-bca4-2770564290ae-1620654317494",
                    "action": "6088031ba2ab2d0035cb2740",
                    "startTime": "2021-05-10T13:45:17.494Z",
                    "retriesLeft": 0,
                    "status": "success",
                    "result": {
                        "stdout": "+ myitero-lab - Search_Order: order_id: null",
                        "stderr": "",
                        "result": JSON.stringify({'name': 'Search_Order','params': {'order_id': 'null'}})
                    },
                    "finishTime": "2021-05-10T13:45:17.548Z"
                }
            },
            "startTime": "2021-05-10T13:45:17.398Z",
            "processIndex": 0,
            "processName": "Process #1",
            "finishTime": "2021-05-10T13:45:17.555Z"
        }
    ]
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

module.exports = {processes, configuration}


