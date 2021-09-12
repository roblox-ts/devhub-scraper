The Character property contains a reference to a [Model](https://developer.roblox.com/en-us/api-reference/class/Model) containing a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid), body parts, scripts and other objects required for simulating the player's avatar in-game. The model is parented to the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace), but may be moved. It is automatically loaded when [Players.CharacterAutoLoads](https://developer.roblox.com/en-us/api-reference/property/Players/CharacterAutoLoads) is true, but can be manually loaded otherwise using [Player:LoadCharacter](https://developer.roblox.com/en-us/api-reference/function/Player/LoadCharacter).

Initially, this property is nil then set when the player's character first spawns. Use the [Player.CharacterAdded](https://developer.roblox.com/en-us/api-reference/event/Player/CharacterAdded) event to detect when a player's character properly loads, and the [Player.CharacterRemoving](https://developer.roblox.com/en-us/api-reference/event/Player/CharacterRemoving) event to detect when the character is about to despawn. Avoid using [Instance:GetPropertyChangedSignal](https://developer.roblox.com/en-us/api-reference/function/Instance/GetPropertyChangedSignal) on this property.

Notes
-----

LocalScripts that are cloned from [StarterGui](https://developer.roblox.com/en-us/api-reference/class/StarterGui) or [StarterPack](https://developer.roblox.com/en-us/api-reference/class/StarterPack) into a player's [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack) or [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui) are often run before the old Character model is deleted. Player.Character still refers to a model, but that model's parent is nil and it is has been destroyed. Because of this, if the Character already exists, you should check to make sure that the Character's parent is not nil before using it.

So if you're writing a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) under the [StarterGui](https://developer.roblox.com/en-us/api-reference/class/StarterGui) or [StarterPack](https://developer.roblox.com/en-us/api-reference/class/StarterPack) that requires access to the player's character, use this:

local Players = game:GetService("Players")
local player = Players.LocalPlayer
local character = player.Character
if not character or not character.Parent then
    character = player.CharacterAdded:wait()
end