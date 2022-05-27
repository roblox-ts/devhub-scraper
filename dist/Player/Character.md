The Character property contains a reference to a [Model](https://create.roblox.com/docs/reference/engine/classes/Model) containing a
[Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid), body parts, scripts and other objects required for simulating
the player's avatar in-game. The model is parented to the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace), but
may be moved. It is automatically loaded when [Players.CharacterAutoLoads](https://create.roblox.com/docs/reference/engine/classes/Players#CharacterAutoLoads)
is true, but can be manually loaded otherwise using
[Player:LoadCharacter](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacter).

Initially, this property is nil then set when the player's character first
spawns. Use the [Player.CharacterAdded](https://create.roblox.com/docs/reference/engine/classes/Player#CharacterAdded) event to detect when a player's
character properly loads, and the [Player.CharacterRemoving](https://create.roblox.com/docs/reference/engine/classes/Player#CharacterRemoving) event to
detect when the character is about to despawn. Avoid using
[Instance:GetPropertyChangedSignal](https://create.roblox.com/docs/reference/engine/classes/Instance#GetPropertyChangedSignal) on this property.

Note: LocalScripts that are cloned from [StarterGui](https://create.roblox.com/docs/reference/engine/classes/StarterGui) or [StarterPack](https://create.roblox.com/docs/reference/engine/classes/StarterPack) into
a player's [Backpack](https://create.roblox.com/docs/reference/engine/classes/Backpack) or [PlayerGui](https://create.roblox.com/docs/reference/engine/classes/PlayerGui) are often run before the old
Character model is deleted. Player.Character still refers to a model, but
that model's parent is nil and it is has been destroyed. Because of this,
if the Character already exists, you should check to make sure that the
Character's parent is not nil before using it.

So if you're writing a [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) under the [StarterGui](https://create.roblox.com/docs/reference/engine/classes/StarterGui) or
[StarterPack](https://create.roblox.com/docs/reference/engine/classes/StarterPack) that requires access to the player's character, use this:

```lua
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local character = player.Character
if not character or not character.Parent then
    character = player.CharacterAdded:wait()
end
```