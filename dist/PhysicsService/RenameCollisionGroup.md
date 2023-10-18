Renames the specified registered collision group, but does **not** rename
the [`CollisionGroup`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CollisionGroup) property of parts that
utilize the group. The first argument of this method is the name of the
group to rename, the second argument is the new name for the group. If the
specified group does not exist, this method will not do anything. The
naming conventions for the new name follow the same rules as if the group
was being created with
[`RegisterCollisionGroup()`](https://create.roblox.com/docs/reference/engine/classes/PhysicsService#RegisterCollisionGroup).

This method will throw a runtime error in the following circumstances:

- Invalid or empty name provided for either argument.
- The method is called from a client.

Note that this method has a slight performance overhead based on the
number of [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in the workspace, so it's recommended
that you register all collision groups at edit time through the Studio
[editor](https://create.roblox.com/docs/workspace/collisions#collision-groups) and rename
them as infrequently as possible.