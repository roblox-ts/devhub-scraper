The end-effector offset is an additional `Datatype.CFrame` applied on top
of the [`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target)'s `Datatype.CFrame` that produces
the final `Datatype.CFrame` used to place the
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector). By default, it's the identity
CFrame, so if you don't set it, it has no effect and the
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) uses the
[`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target)'s `Datatype.CFrame` directly, which is
specified in the local space of the
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector).

Alternatively, you can use Attachments by setting an Attachment as
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector), which moves it to the
[`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target) instead of the parts it's attached to,
effectively obtaining the same result.

You can also use [`EndEffectorOffset`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffectorOffset) to
modify which axis of the [`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) should
point at the [`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target) when using `LookAt` as
[`Type`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Type).