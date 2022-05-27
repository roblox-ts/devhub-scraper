InsertService is used to insert assets from the Roblox website, typically the
[LoadAsset](https://create.roblox.com/docs/reference/engine/classes/InsertService#LoadAsset) function.

To load an asset, the asset must be accessible by the creator of the game
loading it, which can be either a user or group. Due to these restrictions,
InsertService is useful for loading sensitive data, typically API or secret
keys to be used with [HttpService](https://create.roblox.com/docs/reference/engine/classes/HttpService). Should a game be uploaded by a different
creator, the sensitive data would not be accessible. See the
[LoadAsset](https://create.roblox.com/docs/reference/engine/classes/InsertService#LoadAsset) function for more details on this security
check.

See also:

- [AssetService](https://create.roblox.com/docs/reference/engine/classes/AssetService), which can provide information about assets you might want to
  load using InsertService