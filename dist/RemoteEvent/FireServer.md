The FireServer event fires the [RemoteEvent.OnServerEvent](https://developer.roblox.com/en-us/api-reference/event/RemoteEvent/OnServerEvent) event on the server using the arguments specified with an additional player argument at the beginning.

Since this function is used to communicate from the client to the server, it will only work when used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

When firing from the client note that nothing has to be passed in by default (unlike firing to the client from the server - where the player is passed in).

The functionality of this function, as well as other [RemoteEvent](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent) and [RemoteFunction](https://developer.roblox.com/en-us/api-reference/class/RemoteFunction) events and functions, is well documented in [this](https://developer.roblox.com/articles/Remote-Functions-and-Events) article.