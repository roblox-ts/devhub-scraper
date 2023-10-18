[`PhysicsService`](https://create.roblox.com/docs/reference/engine/classes/PhysicsService) primarily contains methods for working with **collision
groups** which define whether a set of parts may or may not collide with parts
in other collision groups. You can register a collision group through
[`RegisterCollisionGroup()`](https://create.roblox.com/docs/reference/engine/classes/PhysicsService#RegisterCollisionGroup) and
assign parts to it by setting those parts'
[`CollisionGroup`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CollisionGroup) property to the **name** of the
collision group.

Creating, deleting, and modifying collision relationships between collision
groups is limited to server-side [`Scripts`](https://create.roblox.com/docs/reference/engine/classes/Script).

See
[Collision Filtering](https://create.roblox.com/docs/workspace/collisions#collision-filtering)
for usage details in Studio and within scripts.