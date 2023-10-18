Returns whether the inventory of the given player contains an asset, given
its ID. In the case that a query fails, this method will throw an error,
so it's recommended to wrap calls to this method in `pcall()`.

- This method should **not** be used for
[passes](https://create.roblox.com/docs/production/monetization/game-passes) since they use
a separate ID system. Legacy passes that still depend on an asset ID
should use
[`UserOwnsGamePassAsync()`](https://create.roblox.com/docs/reference/engine/classes/MarketplaceService#UserOwnsGamePassAsync)
instead of this method.
- This method cannot be used to check for
[developer products](https://create.roblox.com/docs/production/monetization/developer-products)
since they can be purchased multiple times but not owned themselves.
Instead, use a [data store](https://create.roblox.com/docs/cloud-services/datastores) to
save when a player has bought a developer product.