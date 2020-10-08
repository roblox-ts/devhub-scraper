A container object that holds a [Player](https://developer.roblox.com/en-us/api-reference/class/Player)'s inventory. Any [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool) in a player's Backpack will be displayed in their inventory at the bottom of their screen. Selecting [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool)s from the inventory will equip the [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool), moving it from the Backpack to the player's character.

The Backpack can also store [Script](https://developer.roblox.com/en-us/api-reference/class/Script)s and [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)s which will run when placed in a player's Backpack.

When a player's character spawns, the contents of the [StarterPack](https://developer.roblox.com/en-us/api-reference/class/StarterPack) and their [StarterGear](https://developer.roblox.com/en-us/api-reference/class/StarterGear) are copied into their Backpack. Once a character dies, the Backpack is removed and a new one will be created – populating it with the contents of [StarterPack](https://developer.roblox.com/en-us/api-reference/class/StarterPack) and [StarterGear](https://developer.roblox.com/en-us/api-reference/class/StarterGear).

Roblox provides an interface for a player to access their backpack and inventory by default at the bottom of the screen. If a developer wishes to disable the default Roblox backpack GUI and replace it with their own, they may do so using [StarterGui:SetCoreGuiEnabled](https://developer.roblox.com/en-us/api-reference/function/StarterGui/SetCoreGuiEnabled).

The Backpack can be accessed from both the client and the server.

```Lua
-- Accessing Backpack from a Server Script:
game.Players.PlayerName.Backpack
 
-- Accessing Backpack from a LocalScript:
game.Players.LocalPlayer.Backpack
```