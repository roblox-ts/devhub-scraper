This function returns a [CatalogPages](https://developer.roblox.com/en-us/api-reference/class/CatalogPages) object containing the result of the given search.

The returned data has the format:

\[
    {
      "Id": 0,
      "ItemType": "Asset",
      "AssetType": "Image",
      "BundleType": "BodyParts",
      "Name": "string",
      "Description": "string",
      "ProductId": 0,
      "Genres": \[
        "All"
      \],
      "BundledItems": \[
        {
          "Owned": true,
          "Id": 0,
          "Name": "string",
          "Type": "string"
        }
      \],
      "ItemStatus": \[
        "New"
      \],
      "ItemRestrictions": \[
        "ThirteenPlus"
      \],
      "CreatorType": "User",
      "CreatorTargetId": 0,
      "CreatorName": "string",
      "Orice": 0,
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
\]