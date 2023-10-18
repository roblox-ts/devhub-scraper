Removes the collision group with the given name. If an invalid name is
provided, this method will not do anything, although if the reserved name
`"Default"` is provided, it will throw an error. If there are any parts in
the collision group when it is removed, these parts will still maintain
the same collision group ID. The physical behavior of parts in a removed
group is undefined, so it is recommended to move any parts in a removed
group to another group. This method will throw a runtime error in the
following circumstances:

- The name `"Default"` is provided.
- The method is called from a client.