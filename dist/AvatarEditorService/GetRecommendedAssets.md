This function returns a list of recommendations based on the given [AssetType](https://developer.roblox.com/en-us/api-reference/enum/AssetType). Take a look at the code sample below for more information on possible usages for this function.

Data is in the format:

```lua
[
    {
      "Item": {
        "AssetId": 0,
        "Name": "string",
        "Price": 0,
        "PremiumPrice": 0,
        "AbsoluteUrl": "string",
        "AudioUrl": "string"
      },
      "Creator": {
        "CreatorId": 0,
        "CreatorType": "string",
        "Name": "string",
        "CreatorProfileLink": "string"
      },
      "Product": {
        "Id": 0,
        "PriceInRobux": 0,
        "IsForSale": true,
        "IsPublicDomain": true,
        "IsResellable": true,
        "IsLimited": true,
        "IsLimitedUnique": true,
        "SerialNumber": 0,
        "IsRental": true,
        "RentalDurationInHours": 0,
        "BcRequirement": 0,
        "TotalPrivateSales": 0,
        "SellerId": 0,
        "SellerName": "string",
        "LowestPrivateSaleUserAssetId": 0,
        "IsXboxExclusiveItem": true,
        "OffsaleDeadline": "string",
        "NoPriceText": "string",
        "IsFree": true
      }
    }
]
```