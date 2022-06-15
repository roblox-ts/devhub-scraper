Returns true if an [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) is a descendant of the given ancestor.

An [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) is considered the descendant of an object if the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)'s parent or one of its parent's parent is set to the object.

Note, [DataModel](https://developer.roblox.com/en-us/api-reference/class/DataModel) is a descendant of nil. This means IsDescendantOf cannot be used with a parameter of nil to check if an object has been removed.

See also, [Instance:IsAncestorOf](https://developer.roblox.com/en-us/api-reference/function/Instance/IsAncestorOf).