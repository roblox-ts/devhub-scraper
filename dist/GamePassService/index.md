The GamePassService is a service that supports legacy game passes using _Asset IDs_. [MarketplaceService](https://developer.roblox.com/en-us/api-reference/class/MarketplaceService) should be used for all new game passes.

For more information about game passes, please see [this article](https://developer.roblox.com/articles/Game-Passes-One-Time-Purchases).

Legacy Game Passes
------------------

Historically, game passes on Roblox had an _Asset ID_ associated with them. Although game passes created with an _Asset ID_ still have an _Asset ID_, they now also have a _Game Pass ID_. All new game passes created today **only** have a _Game Pass ID_.

You can retrieve the _Game Pass ID_ of any pass through its URL, for example the _Game Pass ID_ of the below pass is 1:

```Lua
https://www.roblox.com/game-pass/1/myGamePass
``` 

Whether you are using an _Asset ID_ or a _Game Pass ID_ determines which API members you can use.

Works with _Asset ID_ (Legacy)

Works with _Game Pass ID_ (Current)

Verify Ownership

[GamePassService:  
PlayerHasPass](https://developer.roblox.com/api-reference/function/GamePassService/PlayerHasPass)

[MarketplaceService:  
UserOwnsGamePassAsync](https://developer.roblox.com/api-reference/function/MarketplaceService/UserOwnsGamePassAsync)

Prompt a purchase

[MarketplaceService:  
PromptPurchase](https://developer.roblox.com/api-reference/function/MarketplaceService/PromptPurchase)

[MarketplaceService:  
PromptGamePassPurchase](https://developer.roblox.com/api-reference/function/MarketplaceService/PromptGamePassPurchase)

Prompted purchase finished

[MarketplaceService.  
PromptPurchaseFinished](https://developer.roblox.com/api-reference/event/MarketplaceService/PromptPurchaseFinished)

[MarketplaceService.  
PromptGamePassPurchaseFinished](https://developer.roblox.com/api-reference/event/MarketplaceService/PromptGamePassPurchaseFinished)

API members that work with _Asset IDs_ **will not** work with new game passes as they do not have them.