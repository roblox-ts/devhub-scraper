By changing the [`Type`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Type), you can change the behavior
of the control. These are the available options:

- Transform: it's a full 6-DoF constraint. Aligns the
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) `Datatype.CFrame` to that of
the [`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target).
- Position: aligns the [`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) position
to that of the [`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target).
- Rotation: aligns the [`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) rotation
to that of the [`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target).
- LookAt: moves and orients the whole chain to make an axis (by default
the forward axis) on the [`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) point
at a position in the world specified by [`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target).