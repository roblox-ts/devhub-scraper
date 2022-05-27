The object in 3D space the [mouse](https://create.roblox.com/docs/reference/engine/classes/Mouse) is pointing to.

Note:

- If [Mouse.TargetFilter](https://create.roblox.com/docs/reference/engine/classes/Mouse#TargetFilter) has been set, the target filter and its
  descendants will be ignored.
- When the mouse is not pointing at a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart), for example when it is
  pointing at the sky, Target will be nil.
- Developers looking for the position of the mouse in 3D space should use
  [Mouse.Hit](https://create.roblox.com/docs/reference/engine/classes/Mouse#Hit).