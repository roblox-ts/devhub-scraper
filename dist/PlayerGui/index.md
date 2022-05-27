The PlayerGui object is a container that holds a [Player](https://create.roblox.com/docs/reference/engine/classes/Player)'s user GUI. If a
[ScreenGui](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) is a descendant of a PlayerGui, then any [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject) inside of the
ScreenGui will be drawn to the player's screen. Any [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) will run as
soon as it is inserted into a PlayerGui.

When a player first joins a game, their PlayerGui is automatically inserted
into their [Player](https://create.roblox.com/docs/reference/engine/classes/Player) object. When the player's [Player.Character](https://create.roblox.com/docs/reference/engine/classes/Player#Character) spawns for
the first time all of the contents of [StarterGui](https://create.roblox.com/docs/reference/engine/classes/StarterGui) are automatically copied
into the player's PlayerGui. Note that if [Players.CharacterAutoLoads](https://create.roblox.com/docs/reference/engine/classes/Players#CharacterAutoLoads) is set
to false the character will not spawn and StarterGui contents will not be
copied until [Player:LoadCharacter](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacter) is called. If
[StarterGui.ResetPlayerGuiOnSpawn](https://create.roblox.com/docs/reference/engine/classes/StarterGui#ResetPlayerGuiOnSpawn) is set to true then every time the player's
character respawns all of the contents of that player's PlayerGui is cleared
and replaced with the contents of StarterGui.

```lua
-- Accessing PlayerGui from a LocalScript:
game:GetService('Players').LocalPlayer:WaitForChild('PlayerGui')
```