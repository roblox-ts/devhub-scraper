A service-level container whose contents are copied into each [Player](https://developer.roblox.com/en-us/api-reference/class/Player)'s [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack) when the player spawns. It is generally used to hold `Tools`, but is sometimes used to hold [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)s to ensure that each player gets a copy.

When a player's character spawns, the contents of the StarterPack and their [StarterGear](https://developer.roblox.com/en-us/api-reference/class/StarterGear) are copied into their [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack). Once a character dies, the [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack) is removed and a new one is created – populating it using the contents of [StarterPack](https://developer.roblox.com/en-us/api-reference/class/StarterPack) and [StarterGear](https://developer.roblox.com/en-us/api-reference/class/StarterGear).

The StarterPack is used to determine a set of [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool)s that _all_ players will spawn with. If a developer wants to ensure that certain [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool)s are available to specific players, then they will need to parent the [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool)s directly to the player's [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack) instead.

Note: while normally the contents of [StarterPack](https://developer.roblox.com/en-us/api-reference/class/StarterPack) are predefined, the contents can be changed while the game is running by adding and removing [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool)s accordingly. These updates will pass onto a player's backpack when they respawn and their backpacks are reloaded. Changes to the StarterPack should be made by the server.

A tool can be added to the StarterPack using the following code.

```Lua
Tool.Parent = game:GetService("StarterPack")
```