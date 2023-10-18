Fired during every heartbeat that the mouse isn't being passed to another
mouse event.

Note, this event should not be used to determine when the mouse is still.
As it fires every heartbeat it will fire between [`Mouse.Move`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Move)
events.

For information on how to obtain the [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) object, please see the
[`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) page.

Developers can find out the position of the mouse in world-space, and if
it is pointing at any [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) using the [`Mouse.Hit`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Hit) and
[`Mouse.Target`](https://create.roblox.com/docs/reference/engine/classes/Mouse#Target) properties.

Note, developers are recommended to use [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) instead
of the [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) object in new work.