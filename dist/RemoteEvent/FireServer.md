Fires the [`OnServerEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent#OnServerEvent) event on the
server from one client. Connected events receive the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)
argument of the firing client. Since this method is used to communicate
from a client to the server, it will only work when used in a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

Any type of Roblox object such as an [`Enum`](https://create.roblox.com/docs/reference/engine/datatypes/Enum), [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), or
others can be passed as a parameter to
[`FireServer()`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent#FireServer), as well as Luau types such
as numbers, strings, and booleans, although you should carefully explore
the
[limitations](https://create.roblox.com/docs/scripting/events/remote#argument-limitations).

See [Remote Events and Callbacks](https://create.roblox.com/docs/scripting/events/remote) for
code samples and further details on [`RemoteEvent`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent).