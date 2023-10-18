Returns an [`InventoryPages`](https://create.roblox.com/docs/reference/engine/classes/InventoryPages) object with information about owned
items in the users inventory with the given
[`AvatarAssetTypes`](https://create.roblox.com/docs/reference/engine/enums/AvatarAssetType).

The returned table includes the following fields:
```lua
[
    {
      "AssetName": "string",
      "AssetId": 0,
      "SerialNumber": 0,
      "AssetType" : "string",
    }
]
```