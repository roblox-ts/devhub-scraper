The DescendantAdded event fires after a descendant is added to the
[`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance).

As DescendantAdded fires for every descendant, parenting an object to the
[`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) will fire the event for this object and all of its
descendants individually.

Developers only concerned with the immediate children of the
[`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) should use [`Instance.ChildAdded`](https://create.roblox.com/docs/reference/engine/classes/Instance#ChildAdded) instead.

See also [`Instance.DescendantRemoving`](https://create.roblox.com/docs/reference/engine/classes/Instance#DescendantRemoving).