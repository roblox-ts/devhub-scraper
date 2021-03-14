**IsRegion3EmptyWithIgnoreList** returns a bool indicating whether there are no [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s within in the given [Region3](https://developer.roblox.com/en-us/api-reference/datatype/Region3), ignoring any [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s that are descendants of the objects within the given ignore list.

For example, the following code snippet will check to see if the Region is empty, ignoring the descendants of a [Model](https://developer.roblox.com/en-us/api-reference/class/Model) named 'Scenery'.

local region3 = Region3.new(Vector3.new(0, 0, 0), Vector3.new(10, 10, 10))
local scenery = workspace:FindFirstChild("Scenery")
local ignoreList = {scenery}
local isEmpty = workspace:IsRegion3EmptyWithIgnoreList(region3, ignoreList)

This function only returns if a region is empty or not. Developers looking to find [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s in a region should use `Workspace/FindPartsInRegion3WithIgnoreList`.

This function is a variant of `Workspace/IsRegion3Empty` with the addition of an ignore list. In cases where a white list is required instead, developers should check to see if any parts are returned by `Workspace/FindPartsinRegion3WithWhitelist`.

How do Region3 checks work?
---------------------------

Checking if a part overlaps a [Region3](https://developer.roblox.com/en-us/api-reference/datatype/Region3) is not a simple process. It actually is time consuming and complicated. Instead it checks if parts are roughly in the same area. When this function is called, it figures out which voxels contain the [Region3](https://developer.roblox.com/en-us/api-reference/datatype/Region3). It then figures out which parts might be in those voxels. It does this by comparing the axis-aligned bounding box (sometimes called the AABB) of the part with the voxels. The axis-aligned bounding box can be seen in Roblox Studio when a part is selected.

This means that the area that is inspected by the function may be larger than the [Region3](https://developer.roblox.com/en-us/api-reference/datatype/Region3). For this reason it is recommended to make sure that the [Region3](https://developer.roblox.com/en-us/api-reference/datatype/Region3) is on the voxel grid. The best way to do this is by setting the coordinates of the [Region3](https://developer.roblox.com/en-us/api-reference/datatype/Region3) to multiples of 4 (since voxels are 4 x 4 x 4 studs).

This method is a fairly quick and easy way to see if any parts are in a general area. If a game needs to know if parts are exactly in an area, then [BasePart:GetTouchingParts](https://developer.roblox.com/en-us/api-reference/function/BasePart/GetTouchingParts) should be used. There is a higher cost to using [BasePart:GetTouchingParts](https://developer.roblox.com/en-us/api-reference/function/BasePart/GetTouchingParts) since a part is needed in the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) and the function takes more time to run.

Notes
-----

*   If a nil value is given in the ignore list, instances after this value will not be ignored