The DistanceFromCharacter [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) function returns the distance
between the character's head and the given [`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) point. It
returns 0 if the player has no [`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character).

This is useful when determining the distance between a player and another
object or location in game.

If you would like to determine the distance between two non-player
instances or positions, you can use the following:
```lua
local distance = (position1 - position2).magnitude
```