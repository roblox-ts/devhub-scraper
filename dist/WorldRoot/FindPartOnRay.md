**FindPartOnRay** uses [raycasting](https://developer.roblox.com/articles/Raycasting) to find the first [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) or [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) cell intersecting with a given [Ray](https://developer.roblox.com/en-us/api-reference/datatype/Ray). This function returns the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) or terrain cell hit, the point of intersection, the surface normal at the point of intersection, and the associated [Material](https://developer.roblox.com/en-us/api-reference/enum/Material) hit.

```Lua
local character = game.Players.LocalPlayer.Character
-- Get the head
local head = character:FindFirstChild("Head")
-- Build a ray in the direction the head is facing
local origin = head.Position
local lookDirection = head.CFrame.LookVector
local ray = Ray.new(origin, lookDirection * 500)
-- Raycast, ignoring the player's character
local hitPart, hitPosition = workspace:FindPartOnRay(ray, character)
if hitPart then
	print("Hit part: " .. hitPart:GetFullName())
else
	print("Did not hit part")
end
``` 

If the `ignoreDescendantsInstance` parameter is provided, the raycasting calculation will ignore the given object and all of its descendants. It behaves similar to the [Mouse.TargetFilter](https://developer.roblox.com/en-us/api-reference/property/Mouse/TargetFilter) property.

The `terrainCellsAreCubes` and `ignoreWater` parameters determine whether [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) cells should be treated as cubes or not, and whether water should be ignored or not.

In order to whitelist or ignore multiple objects and their descendants, use the [WorldRoot:FindPartOnRayWithWhitelist](https://developer.roblox.com/en-us/api-reference/function/WorldRoot/FindPartOnRayWithWhitelist) and [WorldRoot:FindPartOnRayWithIgnoreList](https://developer.roblox.com/en-us/api-reference/function/WorldRoot/FindPartOnRayWithIgnoreList) variants.

Notes
-----

*   Theoretically, a ray extends infinitely in one direction. However, the max length of the direction vector on Roblox is 5000 studs.
*   The length (magnitude) of the directional vector is important, as parts further away than its length will not be tested.
*   If the ray does not intersect anything, the return values will be `nil` and the point at the end of the ray, respectively.
*   Parts that are in a `articles/Collision Filtering|collision group` that does not collide with the “Default” collision group are ignored implicitly.

For a demonstration of how raycasting works in Roblox, see the [Intro to Raycasting](https://developer.roblox.com/articles/Raycasting) article.