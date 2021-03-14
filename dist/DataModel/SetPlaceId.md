This function sets the [DataModel.PlaceId](https://developer.roblox.com/en-us/api-reference/property/DataModel/PlaceId) of the game instance to the given _placeId_.

Setting the [DataModel.PlaceId](https://developer.roblox.com/en-us/api-reference/property/DataModel/PlaceId) is required to access the [DataStoreService](https://developer.roblox.com/en-us/api-reference/class/DataStoreService) when the place is unpublished (for example a local .rbxl file). See below for an example. Note this will only work when the _'Enable Studio Access to API Services\`_ option is enabled under game settings.

local DataStoreService = game:GetService("DataStoreService")

-- access DataStore 'Data' as place placeId
game:SetPlaceId(placeId)
local dataStore = DataStoreService:GetDataStore("Data")

You can use [DataModel:SetUniverseId](https://developer.roblox.com/en-us/api-reference/function/DataModel/SetUniverseId) to set the [DataModel.GameId](https://developer.roblox.com/en-us/api-reference/property/DataModel/GameId) of the game instance. However, it is the [DataModel.PlaceId](https://developer.roblox.com/en-us/api-reference/property/DataModel/PlaceId) that must be set to access the [DataStoreService](https://developer.roblox.com/en-us/api-reference/class/DataStoreService).