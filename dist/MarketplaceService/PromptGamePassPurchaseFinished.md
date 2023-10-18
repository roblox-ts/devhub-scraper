This event fires when a purchase dialog for a
[pass](https://create.roblox.com/docs/production/monetization/game-passes) is closed. It
fires as the dialog closes, when the player presses "Cancel" at the prompt
or "OK" at the success/error message.

To avoid duplicate item grants, store the purchase in a
[data store.](https://create.roblox.com/docs/cloud-services/datastores) If multiple attemps
are made, check if the item has been already granted. For repeatable
purchases use
[developer products](https://create.roblox.com/docs/production/monetization/developer-products).
#### See Also

- For **developer product** purchase prompts, connect to
[`PromptProductPurchaseFinished`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptProductPurchaseFinished).
- For **affiliate gear sales** or other assets, use
[`PromptPurchaseFinished`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptPurchaseFinished).