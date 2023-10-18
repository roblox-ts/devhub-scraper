This function is a variant of [`WorldRoot:FindPartOnRay()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartOnRay) with the
addition of an inclusion list. This lets you detect only certain parts or
[`Models`](https://create.roblox.com/docs/reference/engine/classes/Model) and is particularly useful when, for example, looking
for points of intersection between a ray and a single part.

If a `nil` value is given in the inclusion list, instances after it will
be disregarded.

Those looking to **exclude** a specific group of objects should instead
use [`WorldRoot:FindPartOnRayWithIgnoreList()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartOnRayWithIgnoreList).