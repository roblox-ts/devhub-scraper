If false (default), the client sends replicated signals
([`DragStart`](https://create.roblox.com/docs/reference/engine/classes/DragDetector#DragStart),
[`DragContinue`](https://create.roblox.com/docs/reference/engine/classes/DragDetector#DragContinue),
[`DragEnd`](https://create.roblox.com/docs/reference/engine/classes/DragDetector#DragEnd)) to the server which processes cursor
rays, makes changes to the data model, and replicates them onwards to
clients.

If true, the client processes those signals itself and does not replicate
them to the server. Client [`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) may be used to
respond to these events and [`RemoteEvents`](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent) may be used
to send any resulting changes that should be replicated to the server.