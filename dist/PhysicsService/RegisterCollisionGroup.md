Registers a new collision group with the given name. The name cannot be
`"Default"`.

Note that this method has a slight performance overhead based on the
number of [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in the workspace, so it's recommended
that you register all collision groups at edit time through the Studio
[editor](https://create.roblox.com/docs/workspace/collisions#collision-groups) and call
[`UnregisterCollisionGroup()`](https://create.roblox.com/docs/reference/engine/classes/PhysicsService#UnregisterCollisionGroup)
and [`RenameCollisionGroup()`](https://create.roblox.com/docs/reference/engine/classes/PhysicsService#RenameCollisionGroup)
as infrequently as possible.