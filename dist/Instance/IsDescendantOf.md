Returns true if an [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) is a descendant of the given ancestor.

An [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) is considered the descendant of an object if the
[`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)'s parent or one of its parent's parent is set to the
object.

Note, [`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel) is a descendant of nil. This means IsDescendantOf
cannot be used with a parameter of nil to check if an object has been
removed.

See also, [`Instance:IsAncestorOf()`](https://create.roblox.com/docs/reference/engine/classes/Instance#IsAncestorOf).