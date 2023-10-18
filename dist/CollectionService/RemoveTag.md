RemoveTag will remove a tag from an instance. This method will not throw
an error if the object did not have the tag in the first place.
Successfully removing a tag will fire a signal created by
[`CollectionService:GetInstanceRemovedSignal()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetInstanceRemovedSignal) with the given tag.

When removing a tag, it is common that some resources are used to give the
tag its functionality, e.g. event connections or tables. To prevent memory
leaks, it is a good idea to clean these up (disconnect, set to nil, etc)
when no longer needed for a tag.