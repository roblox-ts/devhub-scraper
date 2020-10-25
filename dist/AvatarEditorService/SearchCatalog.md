This function returns a [CatalogPages](https://developer.roblox.com/en-us/api-reference/class/CatalogPages) object containing the result of the given search.

The returned data has the format:

```lua
[
    {
      "id": 0,
      "itemType": "Asset",
      "assetType": "Image",
      "bundleType": "BodyParts",
      "name": "string",
      "description": "string",
      "productId": 0,
      "genres": [
        "All"
      ],
      "bundledItems": [
        {
          "owned": true,
          "id": 0,
          "name": "string",
          "type": "string"
        }
      ],
      "itemStatus": [
        "New"
      ],
      "itemRestrictions": [
        "ThirteenPlus"
      ],
      "creatorType": "User",
      "creatorTargetId": 0,
      "creatorName": "string",
      "price": 0,
      "premiumPricing": {
        "premiumDiscountPercentage": 0,
        "premiumPriceInRobux": 0
      },
      "lowestPrice": 0,
      "priceStatus": "string",
      "unitsAvailableForConsumption": 0,
      "purchaseCount": 0,
      "favoriteCount": 0
    }
]
```