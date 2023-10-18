This function returns an array of [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) that are
obscuring the lines of sight between [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s
[`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) and the *castPoints*.

GetPartsObscuringTarget is used by the 'Invisicam' in in the default
camera scripts to hide parts between the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s
[`Camera.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Camera#CFrame) and [`Camera.Focus`](https://create.roblox.com/docs/reference/engine/classes/Camera#Focus).

Any [`Instances`](https://create.roblox.com/docs/reference/engine/classes/Instance) included in the *ignoreList* array will,
along with their descendants, be ignored.

See below for a visual example of this function. The [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) is
represented by the grey camera model and the cast points are represented
by the colored dots. The [`Parts`](https://create.roblox.com/docs/reference/engine/classes/Part) highlighted in red are the
ones that would be returned.

![A visual demonstration of the function](https://prod.docsiteassets.roblox.com/assets/legacy/GetPartsObscuringTarget.png)

The castPoints parameter is given as an array of
[`Vector3s`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3), for example:
```lua
local castPoints = {Vector3.new(0, 10, 0), Vector3.new(0, 15, 0)}
local ignoreList = {}
workspace.CurrentCamera:GetPartsObscuringTarget(castPoints, ignoreList)
```

The array of [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) returned is in an arbitrary order,
and no additional raycast data is provided (for example hit position, hit
material and surface normal). If this information is required, you should
a [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) raycast function such as
[`Workspace.FindPartOnRayWithIgnoreList`](https://create.roblox.com/docs/reference/engine/classes/Workspace#FindPartOnRayWithIgnoreList).

If [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) obscures a cast point, [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart)
obscuring the cast point between the obscuring [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) and the
cast point will not be returned.

Note, this function benefits from internal optimisations that make it more
performant than casting a ray for each cast point individually.