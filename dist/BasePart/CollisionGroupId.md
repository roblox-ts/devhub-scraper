The [`BasePart.CollisionGroupId`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CollisionGroupId) property describes the ID number of
the part's collision group. Parts start off in the `"Default"` group whose
ID is 0. If a part is unregistered, the value becomes -1. This value
cannot be less than -1 and it cannot exceed
[`PhysicsService:GetMaxCollisionGroups()`](https://create.roblox.com/docs/reference/engine/classes/PhysicsService#GetMaxCollisionGroups). Invalid IDs are clamped.

Although this property can be directly changed, it's recommended that you
specify the collision group by setting [`BasePart.CollisionGroup`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CollisionGroup) to
the collision group's **name**.