AddTag will apply a tag to an [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance), doing nothing if the tag
is already applied to the instance. Successfully adding a tag will fire a
signal created by [`CollectionService:GetInstanceAddedSignal()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetInstanceAddedSignal) with
the given tag.

**Warning:** When tagging an instance, it is common that some resources
are used to give the tag its functionality, e.g. event connections or
tables. To prevent memory leaks, it is a good idea to clean these up
(disconnect, set to nil, etc) when no longer needed for a tag. Do this
when calling [`CollectionService:RemoveTag()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#RemoveTag), calling
[`Instance:Destroy()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy) or in a function connected to a signal returned
by [`CollectionService:GetInstanceRemovedSignal()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetInstanceRemovedSignal).