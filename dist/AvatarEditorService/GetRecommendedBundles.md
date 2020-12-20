This function returns a list of recommended bundles for a given bundle id.

Data is in the format:

```lua
[
    {
      "Id": 0,
      "Name": "string",
      "Description": "string",
      "BundleType": "string",
      "Items": [
        {
          "Owned": true,
          "Id": 0,
          "Name": "string",
          "Type": "string"
        }
      ],
      "Creator": {
        "Id": 0,
        "Name": "string",
        "Type": "string"
      },
      "Product": {
        "Id": 0,
        "Type": "string",
        "IsPublicDomain": true,
        "IsForSale": true,
        "PriceInRobux": 0,
        "PremiumPricing": {
          "PremiumDiscountPercentage": 0,
          "PremiumPriceInRobux": 0
        }
      }
    }
]
```