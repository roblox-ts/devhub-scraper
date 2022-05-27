The GamePassService is a service that supports legacy game passes using _Asset
IDs_. [MarketplaceService](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService) should be used for all new game passes.

For more information about game passes, please see [this article][1].

## Legacy Game Passes

Historically, game passes on Roblox had an _Asset ID_ associated with them.
Although game passes created with an _Asset ID_ still have an _Asset ID_, they
now also have a _Game Pass ID_. All new game passes created today **only**
have a _Game Pass ID_.

You can retrieve the _Game Pass ID_ of any pass through its URL, for example
the _Game Pass ID_ of the below pass is 1:

> https://www.roblox.com/game-pass/1/myGamePass

Whether you are using an _Asset ID_ or a _Game Pass ID_ determines which API
members you can use.

|                            | Works with Asset ID (Legacy)                                                                                     | Works with Game Pass ID (Current)                                                                                                |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Verify Ownership           | [GamePassService:PlayerHasPass](/reference/engine/classes/GamePassService#PlayerHasPass)                         | [MarketplaceService:UserOwnsGamePassAsync](/reference/engine/classes/MarketplaceService#UserOwnsGamePassAsync)                   |
| Prompt a purchase          | [MarketplaceService:PromptPurchase](/reference/engine/classes/MarketplaceService#PromptPurchase)                 | [MarketplaceService:PromptGamePassPurchase](/reference/engine/classes/MarketplaceService#PromptGamePassPurchase)                 |
| Prompted purchase finished | [MarketplaceService.PromptPurchaseFinished](/reference/engine/classes/MarketplaceService#PromptPurchaseFinished) | [MarketplaceService.PromptGamePassPurchaseFinished](/reference/engine/classes/MarketplaceService#PromptGamePassPurchaseFinished) |


API members that work with _Asset IDs_ **will not** work with new game passes
as they do not have them.

[1]: https://developer.roblox.com/articles/Game-Passes-One-Time-Purchases