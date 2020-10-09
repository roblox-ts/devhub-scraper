When detecting changes in the mouse's position on-screen, it is recommended that you use [ContextActionService:BindAction](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/BindAction) with `Enum.UserInputType.MouseMovement` or [UserInputService.InputChanged](https://developer.roblox.com/en-us/api-reference/event/UserInputService/InputChanged), which both describe the position of the mouse using the [Position](https://developer.roblox.com/en-us/api-reference/property/InputObject/Position) (a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3)) of an [InputObject](https://developer.roblox.com/en-us/api-reference/class/InputObject), instead of using this and related properties.

The X property describes the horizontal component of the mouse's position on the screen. The position is measured in pixels relative to the top left corner, under the topbar. This property can be used in conjunction with [Mouse.Y](https://developer.roblox.com/en-us/api-reference/property/Mouse/Y) to produce a [Vector2](https://developer.roblox.com/en-us/api-reference/datatype/Vector2) representing the mouse's position:

```Lua
local position = Vector2.new(mouse.X, mouse.Y)
``` 

This property does not fire [Changed](https://developer.roblox.com/en-us/api-reference/event/Instance/Changed) or the signal returned from [GetPropertyChangedSignal](https://developer.roblox.com/en-us/api-reference/function/Instance/GetPropertyChangedSignal). Use the [Mouse.Move](https://developer.roblox.com/en-us/api-reference/event/Mouse/Move) event instead.