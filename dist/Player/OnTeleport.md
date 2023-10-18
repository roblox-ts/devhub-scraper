Fired when the TeleportState of a player changes. This event is useful for
detecting whether a teleportation was successful.
#### What is the TeleportState?

When a teleportation request is made using [`TeleportService`](https://create.roblox.com/docs/reference/engine/classes/TeleportService), there
are a series of stages before the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) is teleported. The
current stage is represented by the [`Enum.TeleportState`](https://create.roblox.com/docs/reference/engine/enums/TeleportState) value which is
given by OnTeleport. See below for a practical example of this.