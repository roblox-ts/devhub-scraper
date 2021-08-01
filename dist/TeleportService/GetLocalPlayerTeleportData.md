This function returns the _teleportData_ the [Players.LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer) arrived into the place with. It can only be used on the client and can be called at any time.

For example, the following snippet would send the [DataModel.PlaceId](https://developer.roblox.com/en-us/api-reference/property/DataModel/PlaceId) and [DataModel.JobId](https://developer.roblox.com/en-us/api-reference/property/DataModel/JobId) in a dictionary passing the teleport data in a [TeleportOptions](https://developer.roblox.com/en-us/api-reference/class/TeleportOptions) instance using [TeleportOptions:SetTeleportData](https://developer.roblox.com/en-us/api-reference/function/TeleportOptions/SetTeleportData):

\-- Server
local teleportOptions = Instance.new(“TeleportOptions”)
local teleportData = {
    placeId = game.PlaceId,
    jobId = game.JobId
}
teleportOptions:SetTeleportData(teleportData)
TeleportService:TeleportAsync(game.PlaceId, {player}, teleportOptions)

This data could then be retrieved upon arrival using the GetLocalPlayerTeleportData function as follows:

\-- Client
local TeleportService = game:GetService("TeleportService")

local teleportData = TeleportService:GetLocalPlayerTeleportData()
if teleportData then
    local placeId = teleportData.placeId
    local jobId = teleportData.JobId
end)

If no _teleportData_ was set in the teleportation function this function will return _nil_.

Note this function will not return teleportation settings set using [TeleportService:SetTeleportSetting](https://developer.roblox.com/en-us/api-reference/function/TeleportService/SetTeleportSetting), to retrieve these settings use [TeleportService:GetTeleportSetting](https://developer.roblox.com/en-us/api-reference/function/TeleportService/GetTeleportSetting).

Studio limitation
-----------------

This service does not work during playtesting in Roblox Studio — To test aspects of your game using it, you must publish the game and play it in the Roblox application.