[`MarketplaceService`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService) is responsible for in-experience transactions. The
most notable methods are
[`PromptProductPurchase`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptProductPurchase) and
[`PromptPurchase`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptPurchase), as well as the
callback [`ProcessReceipt`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#ProcessReceipt) which must
be defined so that transactions do not fail.

[`MarketplaceService`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService) also has methods that fetch information about
[developer products](https://create.roblox.com/docs/production/monetization/developer-products)
([`GetProductInfo`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#GetProductInfo) and
[`GetDeveloperProductsAsync`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#GetDeveloperProductsAsync)),
[passes](https://create.roblox.com/docs/production/monetization/game-passes)
([`UserOwnsGamePassAsync`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#UserOwnsGamePassAsync)),
and other assets
([`PlayerOwnsAsset`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PlayerOwnsAsset),
[`PlayerOwnsBundle`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PlayerOwnsBundle)).

Understanding [`MarketplaceService`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService) is the first step towards learning to
[monetize](https://create.roblox.com/docs/production/monetization) an experience on Roblox,
as well as [`DataStoreService`](https://create.roblox.com/docs/reference/engine/classes/DataStoreService) which is responsible for saving and
loading data related to purchases.