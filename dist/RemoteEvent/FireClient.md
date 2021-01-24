**FireClient** causes [OnClientEvent](https://developer.roblox.com/en-us/api-reference/event/RemoteEvent/OnClientEvent) to be fired in [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)s running for the given [Player](https://developer.roblox.com/en-us/api-reference/class/Player). Additional data passed to this function is then provided to OnClientEvent; beware of [limitations](https://developer.roblox.com/articles/Remote-Functions-and-Events#parameter-limitations) on this data.

Since this function is used for communication from server to client, so it will only work when used by a server-side [Script](https://developer.roblox.com/en-us/api-reference/class/Script). For client-to-server communication (the other direction), use [FireServer](https://developer.roblox.com/en-us/api-reference/function/RemoteEvent/FireServer). Direct client-to-client communication not possible on Roblox; however, it can be simulated using a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) that relays information received through some other means, such as [FireServer](https://developer.roblox.com/en-us/api-reference/function/RemoteEvent/FireServer).

See also
--------

*   [FireAllClients](https://developer.roblox.com/en-us/api-reference/function/RemoteEvent/FireAllClients), which works similarly but for all [Player](https://developer.roblox.com/en-us/api-reference/class/Player)
    
*   [Remote Functions and Events](https://developer.roblox.com/articles/Remote-Functions-and-Events), which describes related classes, functions and events and also important limitations on the data that can be sent
    
*   Sometimes a game will need to send information from one client to another. Roblox does not support direct client to client contact, so any communication must first go through the server. This is typically done using remote events (although functions could be used if desired). First, the sending client would call FireServer. On the server, the function connected to OnServerEvent would hear this firing, and itself would then call FireClient.