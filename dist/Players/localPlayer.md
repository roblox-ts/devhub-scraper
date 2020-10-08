This is a read-only property which contains a reference to the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) instance for which a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) is running. For [Script](https://developer.roblox.com/en-us/api-reference/class/Script)s running on the server, this property is nil.

This property is useful when creating GUIs that display information about the player. You can use it to accessing the player's [Player.Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character), [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui), and [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack).

Loading GUIs
------------

When creating loading GUIs using [ReplicatedFirst](https://developer.roblox.com/en-us/api-reference/class/ReplicatedFirst), sometimes a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) may run before the [Players.LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer) is created and becomes available. In such cases, it is useful to yield until it is by using [Instance:GetPropertyChangedSignal](https://developer.roblox.com/en-us/api-reference/function/Instance/GetPropertyChangedSignal)

```Lua
local Players = game:GetService("Players")
local player = Players.LocalPlayer or Players:GetPropertyChangedSignal("LocalPlayer"):wait()
``` 

Note that this technique is not required for [LocalScripts](https://developer.roblox.com/en-us/api-reference/class/LocalScript) within in [StarterGui](https://developer.roblox.com/en-us/api-reference/class/StarterGui), [StarterPlayerScripts](https://developer.roblox.com/en-us/api-reference/class/StarterPlayerScripts) or [StarterCharacterScripts](https://developer.roblox.com/en-us/api-reference/class/StarterCharacterScripts), as these kinds of scripts only run if the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) object is already available.