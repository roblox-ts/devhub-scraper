A LocalScript is a Lua source container that runs Lua code on a client connected to a Roblox server. They are used to access client-only objects, such as the player's [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera). For code run through LocalScripts, the LocalPlayer property of the [Players](https://developer.roblox.com/en-us/api-reference/class/Players) service will return the player whose client is running the script.

A LocalScript will **only** run Lua code if it is a descendant of one of the following objects:

*   A Player's [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack), such as a child of a [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool)
*   A Player's [character](https://developer.roblox.com/en-us/api-reference/property/Player/Character) model
*   A Player's [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui)
*   A Player's [PlayerScripts](https://developer.roblox.com/en-us/api-reference/class/PlayerScripts).
*   The [ReplicatedFirst](https://developer.roblox.com/en-us/api-reference/class/ReplicatedFirst) service