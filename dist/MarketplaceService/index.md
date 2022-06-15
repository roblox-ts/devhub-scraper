MarketplaceService is the game service that is responsible for in-game transactions.

The most notable functions are [PromptProductPurchase](https://developer.roblox.com/en-us/api-reference/function/MarketplaceService/PromptProductPurchase) and [PromptPurchase](https://developer.roblox.com/en-us/api-reference/function/MarketplaceService/PromptPurchase), as well as the callback [ProcessReceipt](https://developer.roblox.com/en-us/api-reference/property/MarketplaceService/ProcessReceipt) which must be well defined so that transactions do not fail.

MarketplaceService also has functions that fetch information about developer products ([GetProductInfo](https://developer.roblox.com/en-us/api-reference/function/MarketplaceService/GetProductInfo) and [GetDeveloperProductsAsync](https://developer.roblox.com/en-us/api-reference/function/MarketplaceService/GetDeveloperProductsAsync)), game passes ([UserOwnsGamePassAsync](https://developer.roblox.com/en-us/api-reference/function/MarketplaceService/UserOwnsGamePassAsync)), and other assets ([PlayerOwnsAsset](https://developer.roblox.com/en-us/api-reference/function/MarketplaceService/PlayerOwnsAsset)).

Monetization
------------

Learning to use MarketplaceService is the first step towards learning to monetize a game on Roblox. Another important game service regarding monetization is [DataStoreService](https://developer.roblox.com/en-us/api-reference/class/DataStoreService) which is responsible for saving and loading data like that of purchases.

See also
--------

*   [Monetization Guides](https://developer.roblox.com/learn-roblox/monetization), learning materials related to monetizing your game