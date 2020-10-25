This function returns the item details for the given item. It accepts two parameters - the first indicating the ID of the item being retrieved and the second indicating its [ItemType](https://developer.roblox.com/en-us/api-reference/enum/ItemType).

Data returned in the format:

```lua
{
  "isForRent": true,
  "expectedSellerId": 0,
  "owned": true,
  "isPurchasable": true,
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
```