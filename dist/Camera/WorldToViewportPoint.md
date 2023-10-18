This function returns the screen location and depth of a
[`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) *worldPoint* and whether this point is visible on the
screen or not.

![In-game example](https://prod.docsiteassets.roblox.com/assets/legacy/WorldToViewportPointImage.jpg)

This function does not take in account the current GUI inset (such as the
space occupied by the top bar). This means the 2D position returned is
taken from the top left corner of the viewport. This means, unless you are
using [`ScreenGui.IgnoreGuiInset`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#IgnoreGuiInset) this position is not appropriate
for placing GUI elements.

For an otherwise identical function that accounts for the GUI inset, see
[`Camera:WorldToScreenPoint()`](https://create.roblox.com/docs/reference/engine/classes/Camera#WorldToScreenPoint).

For example:
```lua
local camera = workspace.CurrentCamera
local worldPoint = Vector3.new(0, 10, 0)
local vector, inViewport = camera:WorldToViewportPoint(worldPoint)

local viewportPoint = Vector2.new(vector.X, vector.Y)
local depth = vector.Z
```

Note this function does not perform any raycasting, meaning the visible
bool will be true regardless if the *worldPoint* is obscured by
[`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain).