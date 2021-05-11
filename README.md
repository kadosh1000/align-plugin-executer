# align-plugin-executer
Align plugin for executer

## Method: Execute

**Description**

This method calls generates the final JSON from all the stpes and sends it for execution.

**Parameters**
1. Environment (string) - The environment to use for this execution.
2. Queue (string) - The queue to use for the execution
3. Processes (object) - The Kaholo's SDK processes object.
4. Configuration (object) - The Kaholo's SDK configuration object in a valid format.
5. Execute Trigger (string) - The execution message to send.

## Method: Post

**Description**

This method passes the message to the next queue after the test done running.

**Parameters**
1. Environment (string) - The environment to use for this execution.
2. Queue (string) - The queue to use for the execution
3. message (object) - The message to send.

