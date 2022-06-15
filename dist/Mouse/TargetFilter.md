This property determines an object to be ignored by the mouse when calculating [Mouse.Hit](https://developer.roblox.com/en-us/api-reference/property/Mouse/Hit) and [Mouse.Target](https://developer.roblox.com/en-us/api-reference/property/Mouse/Target). The descendants of the object are also ignored, so it is possible to ignore multiple objects so long as they are a descendant of the object to which this property is set. This property is useful when filtering models containing special effects or decorations that should not affect [Mouse.Hit](https://developer.roblox.com/en-us/api-reference/property/Mouse/Hit) or [Mouse.Target](https://developer.roblox.com/en-us/api-reference/property/Mouse/Target).

This property can be set to any [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) or nil, for example:

local Players = game:GetService("Players")
local player = Players.LocalPlayer 
local mouse = player:GetMouse()
mouse.TargetFilter = workspace.Model
 
-- Now, when the player hovers the cursor over the model, mouse.Target will be some object
-- behind workspace.Model, if there is one.

This property is essentially a single-object blacklist for mouse raycasting. For more in-depth control on raycasting, see the following functions of [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace): `Workspace/FindPartOnRay|FindPartOnRay`, `Workspace/FindPartOnRayWithWhitelist|FindPartOnRayWithWhitelist` and `Workspace/FindPartOnRayWithIgnoreList|FindPartOnRayWithIgnoreList`.

The [Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character) of the [Players.LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer) is ignored by the mouse automatically.