This function returns a list of recommended bundles for a given bundle id.

Data is in the format:

```lua
[
    {
      "id": 0,
      "name": "string",
      "description": "string",
      "bundleType": "string",
      "items": [
        {
          "owned": true,
          "id": 0,
          "name": "string",
          "type": "string"
        }
      ],
      "creator": {
        "id": 0,
        "name": "string",
        "type": "string"
      },
      "product": {
        "id": 0,
        "type": "string",
        "isPublicDomain": true,
        "isForSale": true,
        "priceInRobux": 0,
        "premiumPricing": {
          "premiumDiscountPercentage": 0,
          "premiumPriceInRobux": 0
        }
      }
    }
]
```