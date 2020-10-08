PromptPurchase is used to prompt a player to purchase an item with the given `assetId`. Below is a screenshot of the purchase dialogue that appears when this function is called.

![The purchase dialogue triggered by PromptPurchase](https://developer.roblox.com/assets/blt366e027107d36226/PromptPurchase.jpg)

The above dialogue was triggered using the following:

```Lua
game:GetService("MarketplaceService"):PromptPurchase(game.Players.LocalPlayer, 4367427794)
``` 

For game passes, use [MarketplaceService:PromptGamePassPurchase](https://developer.roblox.com/en-us/api-reference/function/MarketplaceService/PromptGamePassPurchase).