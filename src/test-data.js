/**
 * Here is some test data in order to test the `getMessageJson` method
 */
//  const processes = {
//     "8b40a89e-a4b3-4e4f-9368-3e16c8ae228e": [
//         {
//             "status": "done",
//             "startNode": true
//         }
//     ],
//     "70c1e598-f72a-4ab0-afa2-78959c47e5ad": [
//         {
//             "processId": "6088031ba2ab2d0035cb273b",
//             "iterationIndex": 0,
//             "status": "done",
//             "uuid": "70c1e598-f72a-4ab0-afa2-78959c47e5ad",
//             "actions": {
//                 "6088031ba2ab2d0035cb273c": {
//                     "retries": 0,
//                     "mandatory": null,
//                     "isEnabled": true,
//                     "params": [
//                         {
//                             "_id": "6088031ba2ab2d0035cb273d",
//                             "code": true,
//                             "value": "wcm_admin_user()",
//                             "param": null,
//                             "name": "username"
//                         },
//                         {
//                             "_id": "6088031ba2ab2d0035cb273e",
//                             "code": true,
//                             "value": "wcm_admin_password()",
//                             "param": null,
//                             "name": "password"
//                         },
//                         {
//                             "_id": "6088031ba2ab2d0035cb273f",
//                             "code": null,
//                             "value": "60589ed16f02ea0011c58960",
//                             "param": null,
//                             "name": "mandatory_block"
//                         }
//                     ],
//                     "_id": "6088031ba2ab2d0035cb273c",
//                     "name": "Action #1 ",
//                     "timeout": null,
//                     "method": "Login",
//                     "numParallel": null,
//                     "actionExecutionId": "8540b52e-0edc-4bf9-b64d-c5a76e57ba29-1620654317416",
//                     "action": "6088031ba2ab2d0035cb273c",
//                     "startTime": "2021-05-10T13:45:17.416Z",
//                     "retriesLeft": 0,
//                     "status": "success",
//                     "result": {
//                         "stdout": "+ myitero-lab - Login: username: , password: , mandatory_block: undefined",
//                         "stderr": "",
//                         "result": JSON.stringify(
//                             {
//                                 "stage": "mat",
//                                 "method": "${method}",
//                                 "status": "",
//                                 "retries": 1,
//                                 "attempts": 0,
//                                 "user_name": "${action.params.username}",
//                                 "order_id": "${action.params.order_id}",
//                                 "exception": "",
//                                 "next_step": "",
//                                 "order_information_fields": [],
//                                 "work_orders_fields": [],
//                                 "rx_deafult": true,
//                                 "rx_fields": []
//                         })
//                     },
//                     "finishTime": "2021-05-10T13:45:17.487Z"
//                 },
//                 // "6088031ba2ab2d0035cb2740": {
//                 //     "retries": 0,
//                 //     "mandatory": null,
//                 //     "isEnabled": true,
//                 //     "params": [
//                 //         {
//                 //             "_id": "6088031ba2ab2d0035cb2741",
//                 //             "code": null,
//                 //             "value": null,
//                 //             "param": null,
//                 //             "name": "order_id"
//                 //         }
//                 //     ],
//                 //     "_id": "6088031ba2ab2d0035cb2740",
//                 //     "name": "Action #2 ",
//                 //     "timeout": null,
//                 //     "method": "Search_Order",
//                 //     "numParallel": null,
//                 //     "actionExecutionId": "f355c353-fd9d-4179-bca4-2770564290ae-1620654317494",
//                 //     "action": "6088031ba2ab2d0035cb2740",
//                 //     "startTime": "2021-05-10T13:45:17.494Z",
//                 //     "retriesLeft": 0,
//                 //     "status": "success",
//                 //     "result": {
//                 //         "stdout": "+ myitero-lab - Search_Order: order_id: null",
//                 //         "stderr": "",
//                 //         "result": JSON.stringify({'name': 'Search_Order','params': {'order_id': 'null'}})
//                 //     },
//                 //     "finishTime": "2021-05-10T13:45:17.548Z"
//                 // }
//             },
//             "startTime": "2021-05-10T13:45:17.398Z",
//             "processIndex": 0,
//             "processName": "Process #1",
//             "finishTime": "2021-05-10T13:45:17.555Z"
//         }
//     ]
// };

 const processes = {
    "8b40a89e-a4b3-4e4f-9368-3e16c8ae228e": [
        {
            "status": "done",
            "startNode": true
        }
    ],
    "0047954e-f362-4ab2-8942-355e6ca1326f": [
        {
            "processId": "606d98a80212a5001852f400",
            "iterationIndex": 0,
            "status": "done",
            "uuid": "0047954e-f362-4ab2-8942-355e6ca1326f",
            "actions": {
                "609bff7daf3e14003585055c": {
                    "retries": 1,
                    "mandatory": null,
                    "isEnabled": true,
                    "params": [
                        {
                            "_id": "609bff7daf3e14003585055d",
                            "code": true,
                            "value": "mat_user()",
                            "param": null,
                            "name": "username"
                        },
                        {
                            "_id": "609bff7daf3e14003585055e",
                            "code": null,
                            "value": "",
                            "param": null,
                            "name": "order_id"
                        },
                        {
                            "_id": "609bff7daf3e14003585055f",
                            "code": true,
                            "value": "getConfiguration('Order Information Scanned')",
                            "param": null,
                            "name": "order_information_fields"
                        },
                        {
                            "_id": "609bff7daf3e140035850560",
                            "code": true,
                            "value": "getConfiguration('Work Orders')",
                            "param": null,
                            "name": "work_orders_fields"
                        },
                        {
                            "_id": "609bff7daf3e140035850561",
                            "code": true,
                            "value": "getConfiguration('Rx_fields')",
                            "param": null,
                            "name": "rx_fields"
                        },
                        {
                            "_id": "609bff7daf3e140035850562",
                            "code": null,
                            "value": "true",
                            "param": null,
                            "name": "rx_deafult"
                        },
                        {
                            "_id": "609bff7daf3e140035850563",
                            "code": null,
                            "value": 5,
                            "param": null,
                            "name": "retries"
                        }
                    ],
                    "_id": "609bff7daf3e14003585055c",
                    "name": "login and verify",
                    "timeout": null,
                    "method": "FieldsVerification",
                    "numParallel": null,
                    "actionExecutionId": "7da25f96-eac2-4988-bb8c-97cd66092d4b-1620839497129",
                    "action": "609bff7daf3e14003585055c",
                    "startTime": "2021-05-12T17:11:37.129Z",
                    "retriesLeft": 1,
                    "status": "success",
                    "result": {
                        "stdout": "+ MAT - FieldsVerification: username: qa_sw@aligntech.com",
                        "stderr": "",
                        "result": JSON.stringify({
                            "stage": "mat",
                            "method": "FieldsVerification",
                            "user_name": "qa_sw@aligntech.com",
                            "order_id": "",
                            "exception": "",
                            "status": "",
                            "retries": 5,
                            "attempts": 0,
                            "next_step": "",
                            "order_information_fields": 
                            [
                                {
                                    "field_name": "Order Status:",
                                    "expected_value": "Active",
                                    "time_out_seconds": "120"
                                },
                                {
                                    "field_name": "State:",
                                    "expected_value": "Ready For Download",
                                    "time_out_seconds": "120"
                                },
                                {
                                    "field_name": "First Name:",
                                    "expected_value": "Resto_{{uniqe_suffix}}",
                                    "time_out_seconds": "0"
                                },
                                 {
                                    "field_name": "Order ID:",
                                    "expected_value": "{{order_id}}",
                                    "time_out_seconds": "0"
                                }
                                
                            ],
                            "work_orders_fields": [
                                {
                                    "bill_or_work": "Scanning",
                                    "expected_value": "Completed",
                                    "time_out_seconds": "0"
                                },
                                {
                                    "bill_or_work": "Scanning",
                                    "expected_value": "Completed",
                                    "time_out_seconds": "0",
                                    "file_fields": {
                                        "file_type": "Json",
                                        "fields_verifications": [
                                            {
                                                "field_name": "ToSrvr",
                                                "expected_value": "ACS"
                                            },
                                            {
                                                "field_name": "HeaderID",
                                                "expected_value": "{{order_id}}"
                                            }
                                        ]
                                    }
                                }
                            ],
                            "rx_deafult": true,
                            "rx_fields" : [
                                {
                                    "field_name": "Last Name:",
                                    "expected_value": "Testing1"
                                }
                            ]
                        })
                    },
                    "finishTime": "2021-05-12T17:11:37.189Z"
                }
            },
            "startTime": "2021-05-12T17:11:37.112Z",
            "processIndex": 0,
            "processName": "MAT_Done_Event",
            "finishTime": "2021-05-12T17:11:37.197Z"
        }
    ],
    "9e285ff6-9faa-4424-99b4-4ea16494327f": [
        {
            "processId": "609c0c47447627003f948447",
            "iterationIndex": 0,
            "status": "running",
            "uuid": "9e285ff6-9faa-4424-99b4-4ea16494327f",
            "actions": {
                "609c0c47447627003f948448": {
                    "retries": 0,
                    "mandatory": null,
                    "isEnabled": true,
                    "params": [
                        {
                            "_id": "609c0c47447627003f948449",
                            "code": true,
                            "value": "print()",
                            "param": null,
                            "name": "COMMANDS"
                        }
                    ],
                    "_id": "609c0c47447627003f948448",
                    "name": "Action #1 ",
                    "timeout": null,
                    "method": "execute",
                    "numParallel": null,
                    "actionExecutionId": "2b8448a2-6bdb-4ba5-8b09-f540e007ba30-1620839497226",
                    "action": "609c0c47447627003f948448",
                    "startTime": "2021-05-12T17:11:37.226Z",
                    "retriesLeft": 0,
                    "status": "running"
                }
            },
            "startTime": "2021-05-12T17:11:37.206Z",
            "processIndex": 1,
            "processName": "print"
        }
    ]
}

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


