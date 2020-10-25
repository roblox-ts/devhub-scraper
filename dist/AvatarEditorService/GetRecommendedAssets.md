This function returns a list of recommendations based on the given [AssetType](https://developer.roblox.com/en-us/api-reference/enum/AssetType). Take a look at the code sample below for more information on possible usages for this function.

Data is in the format:

```lua
[
    {
      "item": {
        "assetId": 0,
        "name": "string",
        "price": 0,
        "premiumPrice": 0,
        "absoluteUrl": "string",
        "audioUrl": "string"
      },
      "creator": {
        "creatorId": 0,
        "creatorType": "string",
        "name": "string",
        "creatorProfileLink": "string"
      },
      "product": {
        "id": 0,
        "priceInRobux": 0,
        "isForSale": true,
        "isPublicDomain": true,
        "isResellable": true,
        "isLimited": true,
        "isLimitedUnique": true,
        "serialNumber": 0,
        "isRental": true,
        "rentalDurationInHours": 0,
        "bcRequirement": 0,
        "totalPrivateSales": 0,
        "sellerId": 0,
        "sellerName": "string",
        "lowestPrivateSaleUserAssetId": 0,
        "isXboxExclusiveItem": true,
        "offsaleDeadline": "string",
        "noPriceText": "string",
        "isFree": true
      }
    }
]
```