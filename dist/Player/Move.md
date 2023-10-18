The Move [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) function causes the player's character to walk in
the given direction until stopped, or interrupted by the player (by using
their controls).

This is useful when scripting NPC [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)s that move around a
map - but are not controlled by an actual player's input.

Note that the function's second argument indicates whether the provided
[`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) should move the player relative to world coordinates
(*false*) or the player's [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) (*true*).