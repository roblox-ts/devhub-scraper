Returns an array of [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in the given
[`Region3`](https://create.roblox.com/docs/reference/engine/datatypes/Region3) that are in, or descendant of an entry in, the given
inclusion list.

If a `nil` value is given in the inclusion list, instances after this
value will not be ignored. If no [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) are found, an
empty array will be returned.

This function is a variant of [`WorldRoot:FindPartsInRegion3()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartsInRegion3) with
the addition of an inclusion list. This allows the developer to include
only certain [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [`Models`](https://create.roblox.com/docs/reference/engine/classes/Model) in the
search. Those looking to find [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in a
[`Region3`](https://create.roblox.com/docs/reference/engine/datatypes/Region3) using an exclusion list should use
[`WorldRoot:FindPartsInRegion3WithIgnoreList()`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#FindPartsInRegion3WithIgnoreList).