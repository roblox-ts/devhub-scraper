The object in 3D space the [mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) is pointing to.

Notes
-----

*   If [Mouse.TargetFilter](https://developer.roblox.com/en-us/api-reference/property/Mouse/TargetFilter) has been set, the target filter and its descendants will be ignored.
*   When the mouse is not pointing at a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart), for example when it is pointing at the sky, Target will be nil.
*   Developers looking for the position of the mouse in 3D space should use [Mouse.Hit](https://developer.roblox.com/en-us/api-reference/property/Mouse/Hit).