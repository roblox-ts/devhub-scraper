Read-only property that includes information on how the interpolation of
the [`Tween`](https://create.roblox.com/docs/reference/engine/classes/Tween) is to be carried out, using the `Datatype.TweenInfo`
data type. The TweenInfo data type includes a range of properties that can
be used to achieve various styles of animation, including reversing and
looping [`Tween`](https://create.roblox.com/docs/reference/engine/classes/Tween)s (see examples).

As with all [`Tween`](https://create.roblox.com/docs/reference/engine/classes/Tween) properties, the TweenInfo property is read only.
If a developer wants to modify the TweenInfo of a Tween they must create a
new [`Tween`](https://create.roblox.com/docs/reference/engine/classes/Tween) using [`TweenService:Create()`](https://create.roblox.com/docs/reference/engine/classes/TweenService#Create).