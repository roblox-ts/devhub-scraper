This function is a variant of [WorldRoot:FindPartOnRay](https://developer.roblox.com/en-us/api-reference/function/WorldRoot/FindPartOnRay) with the addition of a whitelist. This lets you detect only certain parts or [Models](https://developer.roblox.com/en-us/api-reference/class/Model) and is particularly useful when, for example, looking for points of intersection between a ray and a single part.

```Lua
local function getIntersection(part, ray)
	local whiteList = {part}
	local _, position, normal = workspace:FindPartOnRayWithWhitelist(ray, whiteList)
	return position, normal
end
``` 

Those looking to utilize an ignore list instead should use [WorldRoot:FindPartOnRayWithIgnoreList](https://developer.roblox.com/en-us/api-reference/function/WorldRoot/FindPartOnRayWithIgnoreList).

Notes
-----

*   If a `nil` value is given in the whitelist, instances after it will be disregarded.
*   Theoretically, a ray extends infinitely in one direction. However, the max length of the direction vector on Roblox is 5000 studs.
*   The length (magnitude) of the directional vector is important, as parts further away than its length will not be tested.
*   If the ray does not intersect anything, the return values will be `nil` and the point at the end of the ray, respectively.
*   Parts that are in a `articles/Collision Filtering|collision group` that does not collide with the “Default” collision group are ignored implicitly.