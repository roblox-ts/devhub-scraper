The **RespawnTime** property controls the time, in seconds, it takes for a
player to respawn when [`Players.CharacterAutoLoads`](https://create.roblox.com/docs/reference/engine/classes/Players#CharacterAutoLoads) is true. It
defaults to 5.0 seconds.

This is useful when you want to change how long it takes to respawn based
on the type of your experience but don't want to handle spawning players
individually.

Although this property can be set from within a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script), you can
more easily set it directly on the **Players** object in Studio's
[Explorer](https://create.roblox.com/docs/studio/explorer) window.