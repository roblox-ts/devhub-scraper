This method removes a tag from an instance. It will not throw an error if
the object does not have the tag. Successfully removing a tag will fire a
signal created by [`CollectionService:GetInstanceRemovedSignal()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetInstanceRemovedSignal)
with the given tag.

Note that when tagging an instance, it's common that some resources are
used to give the tag its functionality, for example event connections or
tables. To prevent memory leaks, it's a good idea to clean these up
(disconnect, set to `nil`, etc.) when no longer needed for a tag.