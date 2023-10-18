Fires when a purchase prompt for an affiliate gear sale or other asset is
closed. This fires right as the dialog closes, when the player presses
"Cancel" at the prompt or "OK" at the success/error message. Does **not**
fire for
[developer product](https://create.roblox.com/docs/production/monetization/developer-products)
or [pass](https://create.roblox.com/docs/production/monetization/game-passes) prompts.
#### See Also

- For [pass](https://create.roblox.com/docs/production/monetization/game-passes) prompts, use
[`MarketplaceService.PromptGamePassPurchaseFinished`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptGamePassPurchaseFinished).
- For
[developer product](https://create.roblox.com/docs/production/monetization/developer-products)
prompts, connect to
[`MarketplaceService.PromptProductPurchaseFinished`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptProductPurchaseFinished).