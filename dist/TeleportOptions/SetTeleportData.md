This is a setter function for data to be passed to the destination place. On the destination place, this data can be retrieved using [TeleportService:GetLocalPlayerTeleportData](https://developer.roblox.com/en-us/api-reference/function/TeleportService/GetLocalPlayerTeleportData).

For example, the following snippet would send the [DataModel.PlaceId](https://developer.roblox.com/en-us/api-reference/property/DataModel/PlaceId) and [DataModel.JobId](https://developer.roblox.com/en-us/api-reference/property/DataModel/JobId) in a dictionary passing the teleport data in a [TeleportOptions](https://developer.roblox.com/en-us/api-reference/class/TeleportOptions) instance using [TeleportOptions:SetTeleportData](https://developer.roblox.com/en-us/api-reference/function/TeleportOptions/SetTeleportData):

\-- Server
local teleportOptions = Instance.new(“TeleportOptions”)
local teleportData = {
    placeId = game.PlaceId,
    jobId = game.JobId
}
teleportOptions:SetTeleportData(teleportData)
TeleportService:TeleportAsync(game.PlaceId, {player}, teleportOptions)

This data could then be retrieved upon arrival using the GetLocalPlayerTeleportData() function as follows:

\-- Client
local TeleportService = game:GetService("TeleportService")

local teleportData = TeleportService:GetLocalPlayerTeleportData()
if teleportData then
    local placeId = teleportData.placeId
    local jobId = teleportData.JobId
end)

If no _teleportData_ was set in the teleportation function this GetLocalPlayerTeleportData() will return _nil_.

See also
--------

For more information on how to teleport players between servers, take a look at the [Telporting Between Places](../../../articles/Teleporting-Between-Places) article.