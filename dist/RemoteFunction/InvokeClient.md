Calls the method bound to the RemoteFunction by [RemoteFunction.OnClientInvoke](https://developer.roblox.com/en-us/api-reference/property/RemoteFunction/OnClientInvoke) for the given [Player](https://developer.roblox.com/en-us/api-reference/class/Player). Use from a [Script](https://developer.roblox.com/en-us/api-reference/class/Script).

If the result is not needed then it is recommended to use a [RemoteEvent:FireClient](https://developer.roblox.com/en-us/api-reference/function/RemoteEvent/FireClient) instead, as its call is asynchronous and doesn't need to wait for a response to continue execution.

This is used to bind functions to invoke the client when the remote function is invoked by the server. This function is in place to provide a method for communicating between the client and server, which is well documented in [this](https://developer.roblox.com/articles/Remote-Functions-and-Events) article.

To fire from the server to the client, you should use [RemoteFunction:InvokeServer](https://developer.roblox.com/en-us/api-reference/function/RemoteFunction/InvokeServer) and [RemoteFunction.OnServerInvoke](https://developer.roblox.com/en-us/api-reference/property/RemoteFunction/OnServerInvoke).

Note
----

In practice, the server does not often invoke the client. Clients typically do not have information the server doesn't have and the actions that only a client can take (displaying a GUI for instance), often do not require a callback. That said, the server invoking clients is still an action that the Roblox engine will support and may be useful in niche situations.

Warning
-------

If a client disconnects or leaves the game while it is being invoked from the server, the InvokeClient function will error. It is therefore recommended to wrap this function in a pcall so it doesn't stop the execution of other code.

There are limitations on the kinds of data that can be passed between the client and server. For more information, see [Parameter Limitations](https://developer.roblox.com/articles/Remote-Functions-and-Events#parameter-limitations).