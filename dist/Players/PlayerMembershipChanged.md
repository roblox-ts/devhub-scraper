This event fires when the game server recognizes that a player's membership has changed. Note, however, that the server will only attempt to check and update the membership **after** the Premium modal has been closed. Thus, to account for cases where the user purchases Premium **outside** of the game while playing, you must still prompt them to purchase Premium; this will then show a message telling them they're already upgraded and, once they close the modal, the game server will update their membership and trigger this event.

To learn more about and incorporating Premium into your game, and monetizing your game with the Premium Payouts system, take a look at [this](https://developer.roblox.com/articles/premium-payouts) article.

See also
--------

*   [MarketplaceService:PromptPremiumPurchase](https://developer.roblox.com/en-us/api-reference/function/MarketplaceService/PromptPremiumPurchase), used to prompt a user to purchase Premium
*   [MarketplaceService.PromptPremiumPurchaseFinished](https://developer.roblox.com/en-us/api-reference/event/MarketplaceService/PromptPremiumPurchaseFinished), fires when the Premium purchase UI closes