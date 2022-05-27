A LocalScript is a Lua source container that runs Lua code on a client
connected to a Roblox server. They are used to access client-only objects,
such as the player's [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera). For code run through LocalScripts, the
LocalPlayer property of the [Players](https://create.roblox.com/docs/reference/engine/classes/Players) service will return the player whose
client is running the script.

A LocalScript will **only** run Lua code if it is a descendant of one of the
following objects:

- A Player's [Backpack](https://create.roblox.com/docs/reference/engine/classes/Backpack), such as a child of a [Tool](https://create.roblox.com/docs/reference/engine/classes/Tool)
- A Player's [character](https://create.roblox.com/docs/reference/engine/classes/Player#Character) model
- A Player's [PlayerGui](https://create.roblox.com/docs/reference/engine/classes/PlayerGui)
- A Player's [PlayerScripts](https://create.roblox.com/docs/reference/engine/classes/PlayerScripts).
- The [ReplicatedFirst](https://create.roblox.com/docs/reference/engine/classes/ReplicatedFirst) service