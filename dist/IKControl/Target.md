The [`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target) represents a point (`Datatype.CFrame`)
in the world that you want your [`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector)
to reach. The exact behavior of reaching can be set via the
[`Type`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Type) property, and an additional
[`Offset`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Offset) can be applied on top of it to modify it.
If you set a [`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target) that will be moved either by
physics or a script, at each frame the [`IKControl`](https://create.roblox.com/docs/reference/engine/classes/IKControl) will try to
satisfy it, automatically updating the point to reach.