This function creates a unit [`Ray`](https://create.roblox.com/docs/reference/engine/datatypes/Ray) from a 2D position on the
viewport (defined in pixels). This position does not account for the GUI
inset. The [`Ray`](https://create.roblox.com/docs/reference/engine/datatypes/Ray) originates from the [`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3)
equivalent of the 2D position in the world at the given depth (in studs)
away from the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera).

As this function does not account for the GUI inset, the viewport position
given is not equivalent to the screen position used by GUI elements. If
you are not using [`ScreenGui.IgnoreGuiInset`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui#IgnoreGuiInset) and need an otherwise
identical function that accounts for the GUI offset, use
[`Camera:ScreenPointToRay()`](https://create.roblox.com/docs/reference/engine/classes/Camera#ScreenPointToRay).

This function can be used in conjunction with the
[`Camera.ViewportSize`](https://create.roblox.com/docs/reference/engine/classes/Camera#ViewportSize) property to create a ray from the centre of
the screen, for example:
```lua
local camera = workspace.CurrentCamera
local viewportPoint = camera.ViewportSize / 2
local unitRay = camera:ViewportPointToRay(viewportPoint.X, viewportPoint.Y, 0)
```

As the [`Ray`](https://create.roblox.com/docs/reference/engine/datatypes/Ray) created is a unit ray it is only one stud long. To
create a longer ray, you can do the following:
```lua
local camera = workspace.CurrentCamera
local length = 500
local unitRay = camera:ScreenPointToRay(100, 100)
local ray = Ray.new(unitRay.Origin, unitRay.Direction * length)
```