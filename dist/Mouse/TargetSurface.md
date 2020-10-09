This property indicates the [NormalId](https://developer.roblox.com/en-us/api-reference/enum/NormalId) of the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) surface at which the mouse is pointing. This property is derived from the world position of mouse ([Mouse.Hit](https://developer.roblox.com/en-us/api-reference/property/Mouse/Hit)) and the part toward which the mouse is pointing ([Mouse.Target](https://developer.roblox.com/en-us/api-reference/property/Mouse/Target)).

This property isn't meaningful when the mouse is not pointing at a part, for example when the mouse is pointing at the sky. At the moment, this property is set to 'Right' under these circumstances. Before using this property, check that the mouse's target is not nil.

```lua
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local mouse = player:GetMouse()
-- Check that there exists a part at which the mouse is pointing
if mouse.Target then
	print("The mouse is pointing to the " .. mouse.TargetSurface.Name .. " side of " .. mouse.Target.Name)
else
	print("The mouse is not pointing at anything.")
end
```