Returns an array of dictionaries, containing information about sets owned
by the user. This includes

- Sets the user is subscribed to.
- Sets that the user created.
- A single set containing the models created by the user.
- A single set containing the decals created by the user.

Note:

- All values in the dictionaries are
[strings](https://create.roblox.com/docs/luau/strings), even if they are a
number.

| Name | Description |
| - | - |
| Name | The name of the set. |
| Description | The description of the set. |
| ImageAssetId | An assetId for the icon of the set. |
| CreatorName | The creator of the set. |
| AssetSetId | The set's unique ID on the website. |
| CategoryId | Identical to AssetSetId |
| SetType | The type of set that this set is. |