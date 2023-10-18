This function returns the screen location and depth of a
[`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) *worldPoint* and whether this point is visible on the
screen or not.

![In-game example](https://prod.docsiteassets.roblox.com/assets/legacy/WorldToScreenPointImage.jpg)

This function takes in account the current GUI inset (such as the space
occupied by the top bar). This means the 2D position returned is in the
same term as GUI positions and can be used to place GUI elements. For an
otherwise identical function that ignores the GUI inset, see
[`Camera:WorldToViewportPoint()`](https://create.roblox.com/docs/reference/engine/classes/Camera#WorldToViewportPoint).

For example:
```lua
local camera = workspace.CurrentCamera
local worldPoint = Vector3.new(0, 10, 0)
local vector, onScreen = camera:WorldToScreenPoint(worldPoint)

local screenPoint = Vector2.new(vector.X, vector.Y)
local depth = vector.Z
```

Note this function does not perform any raycasting, meaning the visible
bool will be true regardless if the *worldPoint* is obscured by
[`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain).