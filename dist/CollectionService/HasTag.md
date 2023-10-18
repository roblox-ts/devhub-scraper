HasTag returns whether a given object has a tag.

- Using [`CollectionService:AddTag()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#AddTag) to add the tag will cause this
method to return true.
- Using [`CollectionService:RemoveTag()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#RemoveTag) to remove the tag will cause
this method to return false.

By extension, any tags returned by a call to
[`CollectionService:GetTags()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetTags) on an object will return true when
used with this method.