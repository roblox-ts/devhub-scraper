The DistanceFromCharacter [Player](https://developer.roblox.com/en-us/api-reference/class/Player) function returns the distance between the character's head and the given [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) point. It returns 0 if the player has no [Player.Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character).

This is useful when determining the distance between a player and another object or location in game.

##Note  
If you would like to determine the distance between two non-player instances or positions, you can use the following:

local distance = (position1 - position2).magnitude