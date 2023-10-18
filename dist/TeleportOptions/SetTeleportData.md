This is a setter function for data to be passed to the destination place.
On the destination place, this data can be retrieved using
[`Player:GetJoinData()`](https://create.roblox.com/docs/reference/engine/classes/Player#GetJoinData) or
[`TeleportService:GetLocalPlayerTeleportData()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#GetLocalPlayerTeleportData).

For example, the following snippet would send the
[`DataModel.PlaceId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#PlaceId) and [`DataModel.JobId`](https://create.roblox.com/docs/reference/engine/classes/DataModel#JobId) in a dictionary
passing the teleport data in a [`TeleportOptions`](https://create.roblox.com/docs/reference/engine/classes/TeleportOptions) instance using
[`TeleportOptions:SetTeleportData()`](https://create.roblox.com/docs/reference/engine/classes/TeleportOptions#SetTeleportData):
```lua
-- Server
local teleportOptions = Instance.new("TeleportOptions")
local teleportData = {
    placeId = game.PlaceId,
    jobId = game.JobId
}
teleportOptions:SetTeleportData(teleportData)
TeleportService:TeleportAsync(game.PlaceId, {player}, teleportOptions)
```

This data could then be retrieved upon arrival using the
GetLocalPlayerTeleportData() function as follows:
```lua
-- Client
local TeleportService = game:GetService("TeleportService")

local teleportData = TeleportService:GetLocalPlayerTeleportData()
if teleportData then
    local placeId = teleportData.placeId
    local jobId = teleportData.JobId
end
```

If no `teleportData` was set in the teleportation function this
GetLocalPlayerTeleportData() will return `nil`.

For more information on how to send and receive user data along with
teleports, see, see
[Teleporting Between Places](https://create.roblox.com/docs/projects/teleporting#sending-user-data-along-with-teleports).