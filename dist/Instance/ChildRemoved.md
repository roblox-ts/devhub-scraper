Fires after a child is removed from this [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance).

Removed refers to when an object's parent is changed from this
[`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) to something other than this [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance). Note, this
event will also fire when a child is destroyed (using
[`Instance:Destroy()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy)) as the destroy function sets an object's
parent to nil.

This function only works for immediate children of the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance).
For a function that captures all descendants, use
[`Instance.DescendantRemoving`](https://create.roblox.com/docs/reference/engine/classes/Instance#DescendantRemoving).

See also [`Instance.ChildAdded`](https://create.roblox.com/docs/reference/engine/classes/Instance#ChildAdded).