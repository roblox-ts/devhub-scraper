This function returns the screen location and depth of a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) _worldPoint_ and whether this point is visible on the screen or not.

![In-game example](https://developer.roblox.com/assets/blte6e03947775417f3/WorldToViewportPointImage.jpg)

This function does not take in account the current GUI inset (such as the space occupied by the top bar). This means the 2D position returned is taken from the top left corner of the viewport. This means, unless you are using [ScreenGui.IgnoreGuiInset](https://developer.roblox.com/en-us/api-reference/property/ScreenGui/IgnoreGuiInset) this position is not appropriate for placing GUI elements.

For an otherwise identical function that accounts for the GUI inset, see [Camera:WorldToScreenPoint](https://developer.roblox.com/en-us/api-reference/function/Camera/WorldToScreenPoint).

For example:

```lua
local camera = workspace.CurrentCamera
local worldPoint = Vector3.new(0, 10, 0)
local vector, inViewport = camera:WorldToViewportPoint(worldPoint)

local viewportPoint = Vector2.new(vector.X, vector.Y)
local depth = vector.Z
``` 

Note this function does not perform any raycasting, meaning the visible bool will be true regardless if the _worldPoint_ is obscured by [BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart) or [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain).