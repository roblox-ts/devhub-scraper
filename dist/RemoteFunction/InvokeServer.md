Clients invoking the server is often used because the server either has access to information the client does not, or the client is requesting a game action that only the server can perform. When invoked, this calls the method bound to the RemoteFunction by [RemoteFunction.OnServerInvoke](https://developer.roblox.com/en-us/api-reference/property/RemoteFunction/OnServerInvoke). Use from a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

If the result is not needed then it is recommended to use a [RemoteEvent:FireServer](https://developer.roblox.com/en-us/api-reference/function/RemoteEvent/FireServer) instead, as its call is asynchronous and doesn't need to wait for a response to continue execution.

This is used to bind functions to invoke the server when the remote event is invoked by a client. This function is in place to provide a method for communicating between the client and server, which is well documented in \[this\]\[1\] article.

To fire from the client to the server, you should use [RemoteFunction:InvokeClient](https://developer.roblox.com/en-us/api-reference/function/RemoteFunction/InvokeClient) and [RemoteFunction.OnClientInvoke](https://developer.roblox.com/en-us/api-reference/property/RemoteFunction/OnClientInvoke).

Note
----

When handling the invocation from the client note that nothing has to be passed in by default (unlike invoking the server where the player is passed in).

There are limitations on the kinds of data that can be passed between the client and server. For more information, see [Parameter Limitations](https://developer.roblox.com/articles/Remote-Functions-and-Events#parameter-limitations).