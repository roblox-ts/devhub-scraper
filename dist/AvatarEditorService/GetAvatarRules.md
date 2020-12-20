This function returns the platform Avatar rules for things like scaling, default shirts and pants, number of wearable assets, ect.

The returned table includes the following fields:

```lua
{
  "PlayerAvatarTypes": [
    "R6"
  ],
  "Scales": {},
  "WearableAssetTypes": [
    {
      "MaxNumber": 0,
      "Id": 0,
      “Name": "string"
    }
  ],
  "BodyColorsPalette": [
    {
      "BrickColorId": 0,
      "NexColor": "string",
      "Name": "string"
    }
  ],
  "BasicBodyColorsPalette": [
    {
      "BrickColorId": 0,
      "HexColor": "string",
      "Name": "string"
    }
  ],
  "MinimumDeltaEBodyColorDifference": 0,
  "ProportionsAndBodyTypeEnabledForUser": true,
  "DefaultClothingAssetLists": {
    "DefaultShirtAssetIds": [
      0
    ],
    "DefaultPantAssetIds": [
      0
    ]
  },
  "BundlesEnabledForUser": true,
  "EmotesEnabledForUser": true
}
```