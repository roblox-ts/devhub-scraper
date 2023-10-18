The [`Pole`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Pole) is an optional [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) that gives
you control over how intermediate parts in your character should bend. It
can be anything that has a position in the world, such as
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment), [`Bone`](https://create.roblox.com/docs/reference/engine/classes/Bone), [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D). It is
by default nil. When you specify it, the underlying solver will make the
parts bend towards it. When it is nil, the solver will try to make elbows
and knees bend appropriately based on the limb of the character. The limb
will be "Arm" when you select as [`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector)
either the *LeftHand* or *RightHand* and as
[`ChainRoot`](https://create.roblox.com/docs/reference/engine/classes/IKControl#ChainRoot) the corresponding *LeftUpperArm* or
*RightUpperArm*, and it will be "Leg" when you select as
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) either the *LeftFoot* or
*RightFoot* and as [`ChainRoot`](https://create.roblox.com/docs/reference/engine/classes/IKControl#ChainRoot) the corresponding
*LeftUpperLeg* or *RightUpperLeg*. In all other cases, if you don't
specify a pole, the chain might not bend as you expect.