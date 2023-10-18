The offset is an additional [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) applied on top of the
[`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target)'s [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) that produces the
final [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) used to place the
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector). It's identity by default, so if
you don't set it, it has no effect and the
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) will use the
[`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target)'s [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) directly. You can
animate it to create procedural animations such as typing on a keyboard.
It's useful when the [`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target) and
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) aren't aligned and you need to
fix it with an additional rotation or translation.