Returns a boolean indicating whether there are no
[`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) within the given [`Region3`](https://create.roblox.com/docs/reference/engine/datatypes/Region3), ignoring
any [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) that are descendants of the objects within
the given ignore list. If a `nil` value is given in the ignore list,
instances after this value will not be ignored.

This function only returns if a region is empty or not. Developers looking
to find specific [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in a region should use
[`WorldRoot:FindPartsInRegion3WithIgnoreList()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartsInRegion3WithIgnoreList).

This function is a variant of [`WorldRoot:IsRegion3Empty()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#IsRegion3Empty) with the
addition of an ignore list. In cases where an inclusion list is required
instead, developers should check to see if any parts are returned by
[`WorldRoot:FindPartsinRegion3WithWhitelist()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartsinRegion3WithWhitelist).