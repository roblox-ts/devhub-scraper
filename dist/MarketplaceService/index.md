MarketplaceService is the game service that is responsible for in-game
transactions.

The most notable functions are
[PromptProductPurchase](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptProductPurchase) and
[PromptPurchase](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptPurchase), as well as the callback
[ProcessReceipt](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#ProcessReceipt) which must be well defined
so that transactions do not fail.

MarketplaceService also has functions that fetch information about developer
products ([GetProductInfo](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#GetProductInfo) and
[GetDeveloperProductsAsync](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#GetDeveloperProductsAsync)),
game passes
([UserOwnsGamePassAsync](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#UserOwnsGamePassAsync)), and other
assets ([PlayerOwnsAsset](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PlayerOwnsAsset),
[PlayerOwnsBundle](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PlayerOwnsBundle)).

## Monetization

Learning to use MarketplaceService is the first step towards learning to
monetize a game on Roblox. Another important game service regarding
monetization is [DataStoreService](https://create.roblox.com/docs/reference/engine/classes/DataStoreService) which is responsible for saving and loading
data like that of purchases.

See also:

- [Monetization Guides][1], learning materials related to monetizing your game

[promptproductpurchase]: https://prod.docsiteassets.roblox.com/assets/blt3f7406054de2eebc/PromptProductPurchase.png
[1]: /learn-roblox/monetization