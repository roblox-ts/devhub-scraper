A **RemoteEvent** is designed to provide a one-way message between the server
and clients, allowing [Scripts](https://create.roblox.com/docs/reference/engine/classes/Script) to call code in
[LocalScripts](https://create.roblox.com/docs/reference/engine/classes/LocalScript) and vice-versa. This message can be directed from
one client to the server, from the server to a particular client, or from the
server to all clients.

In order for both the server and clients to utilize a remote event, the
RemoteEvent object itself must be in a place where both sides can see it. As
such, we recommend that you store the RemoteEvent inside of
[ReplicatedStorage](https://create.roblox.com/docs/reference/engine/classes/ReplicatedStorage), although in some cases it's appropriate to store it in
the workspace or inside a [Tool](https://create.roblox.com/docs/reference/engine/classes/Tool).

If you need the result of the call, you should use a [RemoteFunction](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction) instead.
Otherwise a remote event is recommended since it will minimize network
traffic/latency and won't yield the script to wait for a response. For more
information, see
[Remote Events and Functions](/scripting/networking/remote-events-and-functions).