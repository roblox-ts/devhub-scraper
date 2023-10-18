This function creates a unit [`Ray`](https://create.roblox.com/docs/reference/engine/datatypes/Ray) from a 2D position on the
screen (defined in pixels). This position accounts for the GUI inset. The
[`Ray`](https://create.roblox.com/docs/reference/engine/datatypes/Ray) originates from the [`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) equivalent of the 2D
position in the world at the given depth (in studs) away from the
[`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera).

As this function accounts for the GUI inset, the offset applied to GUI
elements (such as from the top bar) is accounted for. This means the
screen position specified will start in the top left corner below the top
bar. For an otherwise identical function that does not account for the GUI
offset, use [`Camera:ViewportPointToRay()`](https://create.roblox.com/docs/reference/engine/classes/Camera#ViewportPointToRay).

As the [`Ray`](https://create.roblox.com/docs/reference/engine/datatypes/Ray) created is a unit ray it is only one stud long. To
create a longer ray, you can do the following:
```lua
local camera = workspace.CurrentCamera
local length = 500
local unitRay = camera:ScreenPointToRay(100, 100)
local ray = Ray.new(unitRay.Origin, unitRay.Direction * length)
```