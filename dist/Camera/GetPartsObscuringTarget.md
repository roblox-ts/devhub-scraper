This function returns an array of [BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart) that are obscuring the lines of sight between `Camera|Camera's` [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) and the _castPoints_.

GetPartsObscuringTarget is used by the 'Invisicam' in in the default [camera scripts](http://robloxdev.com/articles/Movement-and-camera-controls) to hide parts between the `Camera|Camera's` [Camera.CFrame](https://developer.roblox.com/en-us/api-reference/property/Camera/CFrame) and [Camera.Focus](https://developer.roblox.com/en-us/api-reference/property/Camera/Focus).

Any [Instances](https://developer.roblox.com/en-us/api-reference/class/Instance) included in the _ignoreList_ array will, along with their descendants, be ignored.

See below for a visual example of this function. The [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) is represented by the grey camera model and the cast points are represented by the colored dots. The [Parts](https://developer.roblox.com/en-us/api-reference/class/Part) highlighted in red are the ones that would be returned.

![A visual demonstration of the function](https://developer.roblox.com/assets/blt0e4c694e16185086/GetPartsObscuringTarget.png)

The castPoints parameter is given as an array of [Vector3s](https://developer.roblox.com/en-us/api-reference/datatype/Vector3), for example:

```lua
local castPoints = {Vector3.new(0, 10, 0), Vector3.new(0, 15, 0)}
local ignoreList = {}
workspace.CurrentCamera:GetPartsObscuringTarget(castPoints, ignoreList)
``` 

The array of [BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart) returned is in an arbitrary order, and no additional raycast data is provided (for example hit position, hit material and surface normal). If this information is required, you should a [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) raycast function such as `Workspace/FindPartOnRayWithIgnoreList`.

If [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) obscures a cast point, [BaseParts](https://developer.roblox.com/en-us/api-reference/class/BasePart) obscuring the cast point between the obscuring [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) and the cast point will not be returned.

Note, this function benefits from internal optimisations that make it more performant than casting a ray for each cast point individually.