[PlayerScripts](https://create.roblox.com/docs/reference/engine/classes/PlayerScripts) is a container object located inside [Player](https://create.roblox.com/docs/reference/engine/classes/Player) objects within
the [Players](https://create.roblox.com/docs/reference/engine/classes/Players) game service. It is created automatically when a player joins
the game. Its main purpose is to contain [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s copied from the
[StarterPlayerScripts](https://create.roblox.com/docs/reference/engine/classes/StarterPlayerScripts) container within the [StarterPlayer](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer) game service,
which happens once upon creation. Descendant `LocalScripts` of [PlayerScripts](https://create.roblox.com/docs/reference/engine/classes/PlayerScripts)
will run code on the client of the [Player](https://create.roblox.com/docs/reference/engine/classes/Player).

Unlike the [Backpack](https://create.roblox.com/docs/reference/engine/classes/Backpack) and [PlayerGui](https://create.roblox.com/docs/reference/engine/classes/PlayerGui) containers, the [PlayerScripts](https://create.roblox.com/docs/reference/engine/classes/PlayerScripts)
container is not accessible to the server. Server [Script](https://create.roblox.com/docs/reference/engine/classes/Script) objects will not
run when parented to [PlayerScripts](https://create.roblox.com/docs/reference/engine/classes/PlayerScripts).