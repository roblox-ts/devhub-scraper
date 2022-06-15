The FireAllClients function fires the [RemoteEvent.OnClientEvent](https://developer.roblox.com/en-us/api-reference/event/RemoteEvent/OnClientEvent) event for each client.

Unlike [RemoteEvent:FireClient](https://developer.roblox.com/en-us/api-reference/function/RemoteEvent/FireClient), this event does not take a target player as an argument. Instead it will fire to all clients who have the same remote event connected to an OnClientEvent event.

Since this function is used to communicate from the server to the client, it will only work when used in a [Script](https://developer.roblox.com/en-us/api-reference/class/Script).

The behavior of this function, as well as other [RemoteEvent](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent) and [RemoteFunction](https://developer.roblox.com/en-us/api-reference/class/RemoteFunction) events and functions, is well documented in [this](https://developer.roblox.com/articles/Remote-Functions-and-Events) article.

There are limitations on the kinds of data that can be passed between the client and server. For more information, see [Parameter Limitations](https://developer.roblox.com/articles/Remote-Functions-and-Events#parameter-limitations).

Note
----

*   Data can be passed from server to client through remote events in the same way data is passed from client to server. Any extra information can be passed in as arguments to the [RemoteEvent:FireClient](https://developer.roblox.com/en-us/api-reference/function/RemoteEvent/FireClient) and FireAllClients functions. Note that the FireClient function still needs to pass the player to send the message to as the first argument.