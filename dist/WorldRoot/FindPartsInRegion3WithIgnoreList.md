Returns an array of [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in the given
[`Region3`](https://create.roblox.com/docs/reference/engine/datatypes/Region3) that aren't in, or a descendant of an entry in, the
given ignore list.

If a `nil` value is given in the ignore list, instances after this value
will not be ignored. If no [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) are found, an empty
array will be returned.

This function is a variant of [`WorldRoot:FindPartsInRegion3()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartsInRegion3) with
the addition of an ignore list. This allows the developer to exclude
certain [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [`Models`](https://create.roblox.com/docs/reference/engine/classes/Model) from the
search. Those looking to find [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in a
[`Region3`](https://create.roblox.com/docs/reference/engine/datatypes/Region3) using an inclusion list should use
[`WorldRoot:FindPartsInRegion3WithWhiteList()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartsInRegion3WithWhiteList).