Returns true if the player with the given [`UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId)
owns the [pass](https://create.roblox.com/docs/production/monetization/game-passes) with the
given `gamePassId`, not to be confused with an asset ID.
#### Caching Behavior

Results of this function are remembered so that repeated calls will return
quicker. This function will always return true if the player owns the pass
upon first entering a server after having purchased the pass. If the pass
is purchased in-experience through
[`PromptGamePassPurchase()`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#PromptGamePassPurchase),
this function may return false due to the caching behavior. Conversely, if
the player deletes the pass from their inventory, this function may return
true despite the player not owning the pass.