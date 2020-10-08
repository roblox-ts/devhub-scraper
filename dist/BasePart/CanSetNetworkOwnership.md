The CanSetNetworkOwnership function checks whether you can set a `BasePart|part's` network ownership.

The function's return value verifies whether or not you can call [BasePart:SetNetworkOwner](https://developer.roblox.com/en-us/api-reference/function/BasePart/SetNetworkOwner) or [BasePart:SetNetworkOwnershipAuto](https://developer.roblox.com/en-us/api-reference/function/BasePart/SetNetworkOwnershipAuto) without encountering an error. It returns true if you can modify/read the network ownership, or returns false and the reason you can't, as a string.

##See Also

*   [Network ownership](https://developer.roblox.com/articles/Network-Ownership)