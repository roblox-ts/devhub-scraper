This method provides information about an asset,
[developer product](https://create.roblox.com/docs/production/monetization/developer-products),
or [pass](https://create.roblox.com/docs/production/monetization/game-passes) given its asset
ID and the [`Enum.InfoType`](https://create.roblox.com/docs/reference/engine/enums/InfoType). If no such item exists with the given ID, this
method will throw an error. Information about the queried item is provided
in a dictionary with the following keys. Note that not all information is
provided or necessarily relevant for the kind of product you're querying.
| Key | Type | Description |
| - | - | - |
| `Name` | string | The name shown on the asset's page. |
| `Description` | string | The description as shown on the asset's page; can be `nil` if blank. |
| `PriceInRobux` | number | The cost of purchasing the asset using Robux. |
| `Created` | string | Timestamp of when the asset was created, for example `2022-01-02T10:30:45Z`. Formatted using ISO 8601. |
| `Updated` | string | Timestamp of when the asset was last updated by its creator, for example `2022-02-12T11:22:15Z`. Formatted using ISO 8601. |
| `ContentRatingTypeId` | number | Indicates whether the item is marked as 13+ in catalog. |
| `MinimumMembershipLevel` | number | The minimum subscription level necessary to purchase the item. |
| `IsPublicDomain` | boolean | Describes whether the asset can be taken for free. |

#### Creator Information
| Key | Type | Description |
| - | - | - |
| `Creator` | table | Dictionary table of information describing the creator of the asset (see following lines). |
| `Creator.CreatorType` | string | Either `User` or `Group`. |
| `Creator.CreatorTargetId` | number | The ID of the creator user or group. |
| `Creator.HasVerifiedBadge` | boolean | Whether the creator has a verified badge. |
| `Creator.Name` | string | The name/username of the creator. |
| `Creator.Id` | number | Use **Creator.CreatorTargetId** instead. |

#### Asset Information
| Key | Type | Description |
| - | - | - |
| `AssetId` | number | If [`Enum.InfoType`](https://create.roblox.com/docs/reference/engine/enums/InfoType) was **Asset**, the ID of the given asset. |
| `AssetTypeId` | number | The type of asset. See [`Enum.AssetType`](https://create.roblox.com/docs/reference/engine/enums/AssetType) for the asset type ID numbers. |
| `IsForSale` | boolean | Describes whether the asset is purchasable. |
| `IsLimited` | boolean | Describes whether the asset is a "limited item" that is no longer (if ever) sold. |
| `IsLimitedUnique` | boolean | Describes whether the asset is a "limited unique" ("Limited U") item that only has a fixed number sold. |
| `IsNew` | boolean | Describes whether the asset is marked as "new" in the catalog. |
| `Remaining` | number | The remaining number of items a limited unique item may be sold. |
| `Sales` | number | The number of items the asset has been sold. |
| `SaleAvailabilityLocations` | table | The item's [`ProductLocationRestriction`](https://create.roblox.com/docs/reference/engine/enums/ProductLocationRestriction) or sale location setting. |
| `CanBeSoldInThisGame` | boolean | Describes whether the asset is purchasable in the current experience. |

#### Developer Products and Passes
| Key | Type | Description |
| - | - | - |
| `ProductId` | number | If [`Enum.InfoType`](https://create.roblox.com/docs/reference/engine/enums/InfoType) was **Product**, the product ID. |
| `IconImageAssetId` | number | The asset ID of the product/pass icon, or `0` if there isn't one. |