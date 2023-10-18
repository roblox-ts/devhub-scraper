Fires when the [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) property of the object or one of
its ancestors is changed.

This event includes two parameters, *child* and *parent*. *Child* refers
to the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) whose [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) was actually
changed. *Parent* refers to this [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)'s new
[`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent).

You can use this event to track the deletion of an instance in Studio,
such as manual deletion in the Explorer or through a plugin. If you need
to detect when an instance is destroyed using [`Instance:Destroy()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy),
use the [`Instance.Destroying`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroying) event instead.