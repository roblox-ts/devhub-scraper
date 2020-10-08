The Move [Player](https://developer.roblox.com/en-us/api-reference/class/Player) function causes the player's character to walk in the given direction until stopped, or interrupted by the player (by using their controls).

This is useful when scripting NPC [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)s that move around a map - but are not controlled by an actual player's input.

Note that the function's second argument indicates whether the provided [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) should move the player relative to world coordinates (_false_) or the player's [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) (_true_).