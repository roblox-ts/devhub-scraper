This function provides information about an asset, developer product or game pass given its **assetId** and the [InfoType](https://developer.roblox.com/en-us/api-reference/enum/InfoType) (Asset, Product or GamePass respectively).

Information about the queried item is provided in a dictionary with the following keys. Note that not all information is provided or necessarily relevant for the kind of object you are querying.

Name

Type

Description

`Name`

string

The name shown on the asset's page

`Description`

string

The description as shown on the asset's page; can be nil if blank

`PriceInRobux`

number

The cost of purchasing the asset using Robux

`Created`

timestamp[](#timestamp)

Timestamp of when the asset was created, e.g. `2018-08-01T17:55:11.98Z`[](#timestamp)

`Updated`

timestamp[](#timestamp)

Timestamp of when the asset was last updated by its creator, e.g. `2018-08-01T17:55:11.98Z`

`ContentRatingTypeId`

number

Indicates whether the item is marked as 13+ in catalog

`MinimumMembershipLevel`

number

The minimum subscription level necessary to purchase the item

`IsPublicDomain`

boolean

Describes whether the asset can be taken for free

**Creator Information**

`Creator`

Dictionary

A table of information describing the creator of the asset (see following lines)

`Creator.CreatorType`

string

Either `User` or `Group`

`Creator.CreatorTargetId`

number

The ID of the creator user or group

`Creator.Name`

string

The name/username of the creator

`Creator.Id`

number

(Use CreatorTargetId instead)

**Assets**

`AssetId`

number

If InfoType was Asset, this is the ID of the given asset.

`AssetTypeId`

number

The type of asset (e.g. place, model, shirt)[\*](#assetTypes)

`IsForSale`

boolean

Describes whether the asset is purchasable

`IsLimited`

boolean

Describes whether the asset is a "limited item" that is no longer (if ever) sold

`IsLimitedUnique`

boolean

Describes whether the asset is a "limited unique" ("Limited U") item that only has a fixed number sold

`IsNew`

boolean

Describes whether the asset is marked as "new" in the catalog

`Remaining`

number

The remaining number of items a limited unique item may be sold

`Sales`

number

The number of items the asset has been sold

`SaleAvailabilityLocations`

Dictionary

The item's [ProductLocationRestriction](https://developer.roblox.com/en-us/api-reference/enum/ProductLocationRestriction) or sale location setting (e.g. anywhere, Shop only).

`CanBeSoldInThisGame`

boolean

Describes whether the asset is purchasable in the current experience.

**Developer Products and Game Passes**

`ProductId`

number

If the InfoType was Product, this is the product ID

`IconImageAssetId`

number

This is the asset ID of the product/pass icon, or 0 if there isn't one

\* See [Asset Types](https://developer.roblox.com/en-us/articles/asset-types) for the asset type ID numbers.  
†Timestamps are formatted using [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)

Possible Errors
---------------

If no such item exists with the given ID, this function will throw an error:

*   For developer products, the error is:

> _MarketplaceService:getProductInfo() failed because rawProductInfo was empty_

*   For game passes and assets, the error is:

> _MarketplaceService:getProductInfo() failed because HTTP 0 (HTTP 400 (HTTP/1.1 400 BadRequest))_

See also
--------

*   [Monetization Guides](https://developer.roblox.com/learn-roblox/monetization), learning materials related to monetizing your game