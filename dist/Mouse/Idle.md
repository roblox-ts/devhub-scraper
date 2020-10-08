Fired during every heartbeat that the mouse isn't being passed to another mouse event.

Note, this event should not be used to determine when the mouse is still. As it fires every heartbeat it will fire between [Mouse.Move](https://developer.roblox.com/en-us/api-reference/event/Mouse/Move) events.

For information on how to obtain the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) object, please see the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) page.

Developers can find out the position of the mouse in world-space, and if it is pointing at any [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) using the [Mouse.Hit](https://developer.roblox.com/en-us/api-reference/property/Mouse/Hit) and [Mouse.Target](https://developer.roblox.com/en-us/api-reference/property/Mouse/Target) properties.

Note, developers are recommended to use [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) instead of the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) object in new work.