The CollisionGroupId property describes the ID number of the part's
collision group. Parts start off in the Default group whose ID is 0.
Although this property can be directly changed, it is recommended to
instead manipulate the collision group of a part using the **name** of the
group with the [PhysicsService:SetPartCollisionGroup](https://create.roblox.com/docs/reference/engine/classes/PhysicsService#SetPartCollisionGroup) function. You can
find the ID of a collision group by using
[PhysicsService:GetCollisionGroupId](https://create.roblox.com/docs/reference/engine/classes/PhysicsService#GetCollisionGroupId).

This value cannot be negative, and cannot exceed
[PhysicsService:GetMaxCollisionGroups](https://create.roblox.com/docs/reference/engine/classes/PhysicsService#GetMaxCollisionGroups). Invalid IDs are clamped.