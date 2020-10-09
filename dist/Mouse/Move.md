Fired when the mouse is moved.

Note, this event is fired when the mouse's position is updated, therefore it will fire repeatedly whilst being moved.

For information on how to obtain the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) object, please see the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) page.

Developers can find out the position of the mouse in world-space, and if it is pointing at any [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) using the [Mouse.Hit](https://developer.roblox.com/en-us/api-reference/property/Mouse/Hit) and [Mouse.Target](https://developer.roblox.com/en-us/api-reference/property/Mouse/Target) properties.

```Lua
mouse.Move:Connect(function()
    local position = mouse.Hit.p
    local target = mouse.Target
    print(target, position)
end)
```

Note, developers are recommended to use [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) instead of the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) object in new work.