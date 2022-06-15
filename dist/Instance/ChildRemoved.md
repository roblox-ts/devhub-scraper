Fires after a child is removed from this [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance).

Removed refers to when an object's parent is changed from this [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) to something other than this [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance). Note, this event will also fire when a child is destroyed (using [Instance:Destroy](https://developer.roblox.com/en-us/api-reference/function/Instance/Destroy)) as the destroy function sets an object's parent to nil.

This function only works for immediate children of the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance). For a function that captures all descendants, use `Instance/DescendantRemoved`.

See also [Instance.ChildAdded](https://developer.roblox.com/en-us/api-reference/event/Instance/ChildAdded).