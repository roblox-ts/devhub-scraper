This function returns a list of recommended assets based on a given
[`Enum.AssetType`](https://create.roblox.com/docs/reference/engine/enums/AssetType) and asset id. Use this to gather a list of similar assets
to the asset provided. Take a look at the code sample below for more
information on possible usages for this function.

Data is in the format:
```lua
[
    {
      "Item": {
        "AssetId": 0,
        "Name": "string",
        "Price": 0,
        "PremiumPrice": 0,
      },
      "Creator": {
        "CreatorId": 0,
        "CreatorType": "string",
        "Name": "string",
      },
      "Product": {
        "Id": 0,
        "PriceInRobux": 0,
        "IsForSale": true,
        "IsResellable": true,
        "IsLimited": true,
        "IsLimitedUnique": true,
        "TotalPrivateSales": 0,
        "OffsaleDeadline": "string",
        "IsFree": true
      }
    }
]
```