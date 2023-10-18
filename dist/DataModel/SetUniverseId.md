This function sets the [`DataModel.GameId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#GameId) of the current game
instance to the given *universeId*. This is useful when testing local
.rbxl files that have not been published to Roblox.

If you want to access the [`DataStoreService`](https://create.roblox.com/docs/reference/engine/classes/DataStoreService) in an unpublished
place, you should use [`DataModel:SetPlaceId()`](https://create.roblox.com/docs/reference/engine/classes/DataModel#SetPlaceId) instead.