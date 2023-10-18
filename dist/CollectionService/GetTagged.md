GetTagged returns an array of objects with a given tag which are
descendants of the [`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel) (`game`). Such tags have been added
using [`CollectionService:AddTag()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#AddTag), and removing a tag using
[`CollectionService:RemoveTag()`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#RemoveTag) will ensure this method does not
return them. Although the name of this method is past-tense, this method
only returns objects **presently** tagged with the given tag. It will not
return objects that once had a tag but no longer have it.

If you want to detect all objects with a tag, both present and future, use
this method to iterate over objects while also making a connection to a
signal returned by [`CollectionService.GetinstanceAddedSignal`](https://create.roblox.com/docs/reference/engine/classes/CollectionService#GetinstanceAddedSignal).

This method does not guarantee any ordering of the returned objects.
Additionally, it is possible that objects can have the given tag assigned
to them, but not be a descendant of the [`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel), i.e. its parent
is nil. This method will not return such objects.