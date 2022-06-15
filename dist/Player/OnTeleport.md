Fired when the TeleportState of a player changes. This event is useful for detecting whether a teleportation was successful.

What is the TeleportState?
--------------------------

When a teleportation request is made using [TeleportService](https://developer.roblox.com/en-us/api-reference/class/TeleportService), there are a series of stages before the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) is teleported. The current stage is represented by the [TeleportState](https://developer.roblox.com/en-us/api-reference/enum/TeleportState) value which is given by OnTeleport. See below for a practical example of this.