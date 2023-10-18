The [`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) describes the last part in
the chain of your character that you want to affect. For example, it could
be the hand when you want to move the whole arm to reach a point. It can
be a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) on a character, that has a [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) as its
child, a [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) directly, a [`Bone`](https://create.roblox.com/docs/reference/engine/classes/Bone), or a
[`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment). The pivot of the selected
[`EndEffector`](https://create.roblox.com/docs/reference/engine/classes/IKControl#EndEffector) moves to the
[`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target), so you can use [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment)s to
modify which point of a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) should reach the
[`Target`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Target).