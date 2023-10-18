The CanSetNetworkOwnership function checks whether you can set a
[`part`](https://create.roblox.com/docs/reference/engine/classes/BasePart)'s network ownership.

The function's return value verifies whether or not you can call
[`BasePart:SetNetworkOwner()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#SetNetworkOwner) or
[`BasePart:SetNetworkOwnershipAuto()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#SetNetworkOwnershipAuto) without encountering an error.
It returns true if you can modify/read the network ownership, or returns
false and the reason you can't, as a string.