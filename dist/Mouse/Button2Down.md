The Button2Down even fires when the the player presses their right mouse button.

This can also be accessed from a [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool). For example, when placed in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript), the code below prints Button2Down whenever the right mouse button is pressed:

```lua
local Tool = script.Parent --make sure this is a Tool object

Tool.Equipped:Connect(function(Mouse)
	Mouse.Button2Down:Connect(function()
		print("Button2Down")
	end)
end).
``` 

Developers can find out the position of the mouse in world-space, and if it is pointing at any [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart), using the [Mouse.Hit](https://developer.roblox.com/en-us/api-reference/property/Mouse/Hit) and [Mouse.Target](https://developer.roblox.com/en-us/api-reference/property/Mouse/Target) properties.

For information on how to obtain the mouse object, please see the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) page.

Note, developers are recommended to use [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) instead of the [Mouse](https://developer.roblox.com/en-us/api-reference/class/Mouse) object in new work.