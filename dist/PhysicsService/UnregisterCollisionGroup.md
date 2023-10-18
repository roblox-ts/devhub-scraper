Unregisters the collision group for the given name, with the following
behaviors:

- If an invalid name is provided, the method will not do anything.
- If the reserved name `"Default"` is provided **or** if the method is
called from a client, it will throw an error.
- If there are any parts in the collision group when it is removed, those
parts will still maintain the same collision group name. The physical
behavior of parts in a removed group is undefined, so it's recommended
to move any parts in a removed group to another group, such as the
`"Default"` group.

Note that this method has a slight performance overhead based on the
number of [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in the workspace, so it's recommended
that you register all collision groups at edit time through the Studio
[editor](https://create.roblox.com/docs/workspace/collisions#collision-groups) and call this
method as infrequently as possible.