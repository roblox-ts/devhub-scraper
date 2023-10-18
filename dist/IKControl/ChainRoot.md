By specifying a [`ChainRoot`](https://create.roblox.com/docs/reference/engine/classes/IKControl#ChainRoot) and an
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector), you instruct the
[`IKControl`](https://create.roblox.com/docs/reference/engine/classes/IKControl) that it's allowed to move and rotate all parts between
the two to move the [`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) to the
[`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target). For example, if you specify the LeftHand
as [`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) and LeftUpperArm as the
[`ChainRoot`](https://create.roblox.com/docs/reference/engine/classes/IKControl#ChainRoot), the control moves 3 parts: the
LeftHand, the LeftLowerArm, and the LeftUpperArm. Avoid setting
[`ChainRoot`](https://create.roblox.com/docs/reference/engine/classes/IKControl#ChainRoot) as the actual root of the character
because that produces unrealistic results.