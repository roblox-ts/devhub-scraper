The internal `Datatype.CFrame` that is manipulated when a [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D)
is being animated. It is recommended to use this property for custom
animations rather than [`JointInstance.C0`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C0) and
[`JointInstance.C1`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C1).
##### Timing

[`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) transforms are not applied immediately, unlike updating
[`C0`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C0) and [`C1`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C1), but rather as
a batch in a parallel job after [`RunService.Stepped`](https://create.roblox.com/docs/reference/engine/classes/RunService#Stepped), immediately
before physics steps. The deferred batch update is much more efficient
than many immediate updates.

If the [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) is part of an animated model with an
[`Animator`](https://create.roblox.com/docs/reference/engine/classes/Animator), then [`Motor6D.Transform`](https://create.roblox.com/docs/reference/engine/classes/Motor6D#Transform) will usually be
overwritten every frame by the [`Animator`](https://create.roblox.com/docs/reference/engine/classes/Animator) after
[`RunService.PreAnimation`](https://create.roblox.com/docs/reference/engine/classes/RunService#PreAnimation) and before [`RunService.Stepped`](https://create.roblox.com/docs/reference/engine/classes/RunService#Stepped).