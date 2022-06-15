InsertService is used to insert assets from the Roblox website, typically the [LoadAsset](https://developer.roblox.com/en-us/api-reference/function/InsertService/LoadAsset) function.

To load an asset, the asset must be accessible by the creator of the game loading it, which can be either a user or group. Due to these restrictions, InsertService is useful for loading sensitive data, typically API or secret keys to be used with [HttpService](https://developer.roblox.com/en-us/api-reference/class/HttpService). Should a game be uploaded by a different creator, the sensitive data would not be accessible. See the [LoadAsset](https://developer.roblox.com/en-us/api-reference/function/InsertService/LoadAsset) function for more details on this security check.

See Also
--------

*   [AssetService](https://developer.roblox.com/en-us/api-reference/class/AssetService), which can provide information about assets you might want to load using InsertService