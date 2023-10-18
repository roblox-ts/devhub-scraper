Fires when a purchase prompt closes for a developer product, right as the
dialog closes when the player presses "Cancel" at the prompt or "OK" at
the success/error message. You can use this event to detect when a
purchase prompt is closed, but it should **not** be used to process
purchases; instead use [`MarketplaceService.ProcessReceipt`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#ProcessReceipt).

Unlike the similarly-named events above, this event fires with a
[`Player.UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) and not a reference to the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) object.

Despite this event's deprecation, it is currently the only way to detect
when a developer product's purchase dialog is closed.

- For [passes](https://create.roblox.com/docs/production/monetization/game-passes), use
[`MarketplaceService.PromptGamePassPurchaseFinished`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptGamePassPurchaseFinished).
- For **affiliate gear sales** or other assets, use
[`MarketplaceService.PromptPurchaseFinished`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptPurchaseFinished).