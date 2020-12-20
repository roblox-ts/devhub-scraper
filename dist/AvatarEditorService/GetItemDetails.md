This function returns the item details for the given item. It accepts two parameters - the first indicating the ID of the item being retrieved and the second indicating its [ItemType](https://developer.roblox.com/en-us/api-reference/enum/ItemType).

Data returned in the format:

```lua
{
  "IsForRent": true,
  "ExpectedSellerId": 0,
  "Owned": true,
  "IsPurchasable": true,
  "Id": 0,
  "ItemType": "Asset",
  "AssetType": "Image",
  "BundleType": "BodyParts",
  "Name": "string",
  "Description": "string",
  "ProductId": 0,
  "Genres": [
    "All"
  ],
  "BundledItems": [
    {
      "Owned": true,
      "Id": 0,
      "Name": "string",
      "Type": "string"
    }
  ],
  "ItemStatus": [
    "New"
  ],
  "ItemRestrictions": [
    "ThirteenPlus"
  ],
  "CreatorType": "User",
  "CreatorTargetId": 0,
  "CreatorName": "string",
  "Price": 0,
  "PremiumPricing": {
    "PremiumDiscountPercentage": 0,
    "PremiumPriceInRobux": 0
  },
  "LowestPrice": 0,
  "PriceStatus": "string",
  "UnitsAvailableForConsumption": 0,
  "PurchaseCount": 0,
  "FavoriteCount": 0
}
```