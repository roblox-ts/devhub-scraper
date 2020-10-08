This function returns the screen location and depth of a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) _worldPoint_ and whether this point is visible on the screen or not.

![In-game example](https://developer.roblox.com/assets/blt0ab12be795dfa164/WorldToScreenPointImage.jpg)

This function takes in account the current GUI inset (such as the space occupied by the top bar). This means the 2D position returned is in the same term as GUI positions and can be used to place GUI elements. For an otherwise identical function that ignores the GUI inset, see [Camera:WorldToViewportPoint](https://developer.roblox.com/en-us/api-reference/function/Camera/WorldToViewportPoint).

For example:

```Lua
local camera = workspace.CurrentCamera
local worldPoint = Vector3.new(0, 10, 0)
local vector, onScreen = camera:WorldToScreenPoint(worldPoint)

local screenPoint = Vector2.new(vector.X, vector.Y)
local depth = vector.Z
``` 

Note this function does not perform any raycasting, meaning the visible bool will be true regardless if the _worldPoint_ is obscured by [BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart) or [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain).