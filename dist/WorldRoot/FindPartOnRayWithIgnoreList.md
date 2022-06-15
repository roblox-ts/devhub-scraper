This function is a variant of [WorldRoot:FindPartOnRay](https://developer.roblox.com/en-us/api-reference/function/WorldRoot/FindPartOnRay) with the addition of an ignore list. This lets you ignore certain parts or [Models](https://developer.roblox.com/en-us/api-reference/class/Model).

Those looking to utilize a whitelist instead should use [WorldRoot:FindPartOnRayWithWhitelist](https://developer.roblox.com/en-us/api-reference/function/WorldRoot/FindPartOnRayWithWhitelist).

Notes
-----

*   Theoretically, a ray extends infinitely in one direction. However, the max length of the direction vector on Roblox is 5000 studs.
*   The length (magnitude) of the directional vector is important, as parts further away than its length will not be tested.
*   If the ray does not intersect anything, the return values will be `nil` and the point at the end of the ray, respectively.
*   Parts that are in a [collision group](https://developer.roblox.com/en-us/articles/collision-filtering) that does not collide with the “Default” collision group are ignored implicitly.