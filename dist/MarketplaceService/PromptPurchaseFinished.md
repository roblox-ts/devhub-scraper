For new game passes using a \*Game Pass ID\*, use \`MarketplaceService/PromptGamePassPurchaseFinished\`

PromptPurchaseFinished fires when a purchase dialogue of an affiliate gear sale or other asset is closed. This fires right as the dialogue closes when the player presses “Cancel” at the prompt, or “OK” at the success/error message.

*   For **game passes**, use [MarketplaceService.PromptGamePassPurchaseFinished](https://developer.roblox.com/en-us/api-reference/event/MarketplaceService/PromptGamePassPurchaseFinished).
*   For **developer product** purchase prompts, connect to [MarketplaceService.PromptProductPurchaseFinished](https://developer.roblox.com/en-us/api-reference/event/MarketplaceService/PromptProductPurchaseFinished). In order to process such purchases you need to set the [ProcessReceipt](https://developer.roblox.com/en-us/api-reference/property/MarketplaceService/ProcessReceipt) callback in a single script.

Example
-------

Below is a screenshot of an affiliate gear sale prompt. The function in the code sample runs immediately after the player presses “Cancel” or after the user buys the item then presses “OK”. Should there be an issue with the purchase, the event also fires.
![A product purchase prompt for an affiliate gear sale](https://developer.roblox.com/assets/blt881d0a28aa9fcf42/PromptProductPurchase-confirm.png)

```Lua
local MarketplaceService = game:GetService("MarketplaceService")

MarketplaceService.PromptPurchaseFinished:connect(function (...)
    -- Print all the details of the prompt, for example:
    -- PromptPurchaseFinished PlayerName 11377306 true
    print("PromptPurchaseFinished", ...)
end)
```