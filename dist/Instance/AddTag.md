This method applies a tag to the instance, with no effect if the tag is
already applied. Successfully adding a tag will fire a signal created by
[`CollectionService:GetInstanceAddedSignal()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetInstanceAddedSignal) with the given tag.

Note that when tagging an instance, it's common that some resources are
used to give the tag its functionality, for example event connections or
tables. To prevent memory leaks, it's a good idea to clean these up
(disconnect, set to `nil`, etc.) when no longer needed for a tag. Do this
when calling [`Instance:RemoveTag()`](https://create.roblox.com/docs/reference/engine/classes/Instance#RemoveTag), calling
[`Instance:Destroy()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy), or in a function connected to a signal
returned by [`CollectionService:GetInstanceRemovedSignal()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetInstanceRemovedSignal).