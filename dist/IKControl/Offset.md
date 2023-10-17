The offset is an additional `Datatype.CFrame` applied on top of the
[`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target)'s `Datatype.CFrame` that produces the
final `Datatype.CFrame` used to place the
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector). It's identity by default, so if
you don't set it, it has no effect and the
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) will use the
[`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target)'s `Datatype.CFrame` directly. You can
animate it to create procedural animations such as typing on a keyboard.
It's useful when the [`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target) and
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) aren't aligned and you need to
fix it with an additional rotation or translation.