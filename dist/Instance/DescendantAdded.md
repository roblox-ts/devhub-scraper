The DescendantAdded event fires after a descendant is added to the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance).

As DescendantAdded fires for every descendant, parenting an object to the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) will fire the event for this object and all of its descendants individually.

Developers only concerned with the immediate children of the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) should use [Instance.ChildAdded](https://developer.roblox.com/en-us/api-reference/event/Instance/ChildAdded) instead.

See also [Instance.DescendantRemoving](https://developer.roblox.com/en-us/api-reference/event/Instance/DescendantRemoving).