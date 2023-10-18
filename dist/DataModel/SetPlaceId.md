This function sets the [`DataModel.PlaceId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#PlaceId) of the game instance to
the given *placeId*.

Setting the [`DataModel.PlaceId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#PlaceId) is required to access the
[`DataStoreService`](https://create.roblox.com/docs/reference/engine/classes/DataStoreService) when the place is unpublished (for example a
local .rbxl file). See below for an example. This will only work when the
*'Enable Studio Access to API Services`* option is enabled under game
settings.
```lua
local DataStoreService = game:GetService("DataStoreService")

-- access DataStore 'Data' as place placeId
game:SetPlaceId(placeId)
local dataStore = DataStoreService:GetDataStore("Data")
```

You can use [`DataModel:SetUniverseId()`](https://create.roblox.com/docs/reference/engine/classes/DataModel#SetUniverseId) to set the
[`DataModel.GameId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#GameId) of the game instance. However, it is the
[`DataModel.PlaceId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#PlaceId) that must be set to access the
[`DataStoreService`](https://create.roblox.com/docs/reference/engine/classes/DataStoreService).