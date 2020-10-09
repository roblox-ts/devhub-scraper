This event fires when a purchase dialogue of a developer product is closed. This fires right as the dialogue closes when the player presses “Cancel” at the prompt, or “OK” at the success/error message. **Do not use this event to process developer product purchases!** For this, you must set the [ProcessReceipt](https://developer.roblox.com/en-us/api-reference/property/MarketplaceService/ProcessReceipt) callback once.

*   For **game passes**, use [MarketplaceService.PromptGamePassPurchaseFinished](https://developer.roblox.com/en-us/api-reference/event/MarketplaceService/PromptGamePassPurchaseFinished).
*   For **affiliate gear sales** or other assets, use [MarketplaceService.PromptPurchaseFinished](https://developer.roblox.com/en-us/api-reference/event/MarketplaceService/PromptPurchaseFinished).

Unlike the similarly-named events above, this event fires with a [Player.UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) and not a reference to the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) object. Despite this event's deprecation, it is currently the only way to detect when a developer product's purchase dialog is closed.

Example
-------

Below is a screenshot of a game pass purchase prompt. The function in the code sample runs immediately after the player presses “Cancel” or after the player buys the developer product then presses “OK”. Should there be an issue with the purchase, the event also fires.

![A developer product purchase prompt](https://developer.roblox.com/assets/blt3f7406054de2eebc/PromptProductPurchase.png)

```lua
local MarketplaceService = game:GetService("MarketplaceService")

MarketplaceService.PromptProductPurchaseFinished:Connect(function (...)
    -- Print all the details of the prompt, for example:
    -- PromptProductPurchaseFinished 269323 327064551 true
    print("PromptProductPurchaseFinished", ...)
end)
```