Fires [RemoteEvent.OnClientEvent](https://developer.roblox.com/en-us/api-reference/event/RemoteEvent/OnClientEvent) for the specified player. Only [connections](https://developer.roblox.com/api-reference/datatype/RBXScriptConnection) in [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)s that are running on the specified player's client will fire. This varies from the RemoteFunction class which will queue requests.

Since this function is used to communicate from the server to the client, it will only work when used in a [Script](https://developer.roblox.com/en-us/api-reference/class/Script).

The functionality of this function, as well as other [RemoteEvent](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent) and [RemoteFunction](https://developer.roblox.com/en-us/api-reference/class/RemoteFunction) events and functions, is well documented in [this](https://developer.roblox.com/articles/Remote-Functions-and-Events) article.

Notes
-----

*   Data can be passed from server to client through remote events in the same way data is passed from client to server. Any extra information can be passed in as arguments to the FireClient and [RemoteEvent:FireAllClients](https://developer.roblox.com/en-us/api-reference/function/RemoteEvent/FireAllClients) functions. Note that the FireClient function still needs to pass the player to send the message to as the first argument.
    
*   Sometimes a game will need to send information from one client to another. Roblox does not support direct client to client contact, so any communication must first go through the server. This is typically done using remote events (although functions could be used if desired). First, the sending client would call FireServer. On the server, the function connected to OnServerEvent would hear this firing, and itself would then call FireClient.