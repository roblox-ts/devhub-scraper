Returns an array of [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s in the given [`Region3`](https://create.roblox.com/docs/reference/engine/datatypes/Region3).

This function takes an optional maxParts parameter (default 20) which
limits the number of [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s that can be returned. Once this
number has been reached, the search for [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s will stop. This
means some [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s may not be returned even if they are within
the [`Region3`](https://create.roblox.com/docs/reference/engine/datatypes/Region3)

The optional ignoreDescendentsInstance parameter can be used to specify a
specific instance for whom itself and all of its descendants should be
ignored by this function. This can be useful when, for example, looking to
see if any [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s are inside a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) other than the
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) itself.
```lua
local min = part.Position - (0.5 * part.Size)
local max = part.Position + (0.5 * part.Size)
local region = Region3.new(min, max)
local parts = worldroot:FindPartsInRegion3(region, part)  -- Ignore part
```

The [`WorldRoot:FindPartsInRegion3WithIgnoreList()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartsInRegion3WithIgnoreList) and
[`WorldRoot:FindPartsInRegion3WithWhiteList()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartsInRegion3WithWhiteList) variants of this
method exist to provide specific exclusion and inclusion functionality.

If no [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s are found, an empty array will be returned.