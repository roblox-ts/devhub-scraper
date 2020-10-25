This function returns the platform Avatar rules for things like scaling, default shirts and pants, number of wearable assets, ect.

Data is in the format:

```lua
{
  "playerAvatarTypes": [
    "R6"
  ],
  "scales": {},
  "wearableAssetTypes": [
    {
      "maxNumber": 0,
      "id": 0,
      "name": "string"
    }
  ],
  "bodyColorsPalette": [
    {
      "brickColorId": 0,
      "hexColor": "string",
      "name": "string"
    }
  ],
  "basicBodyColorsPalette": [
    {
      "brickColorId": 0,
      "hexColor": "string",
      "name": "string"
    }
  ],
  "minimumDeltaEBodyColorDifference": 0,
  "proportionsAndBodyTypeEnabledForUser": true,
  "defaultClothingAssetLists": {
    "defaultShirtAssetIds": [
      0
    ],
    "defaultPantAssetIds": [
      0
    ]
  },
  "bundlesEnabledForUser": true,
  "emotesEnabledForUser": true
}
```