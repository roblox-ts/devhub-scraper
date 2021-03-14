This function fires when the [Players.LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer) enters the place following a teleport. The _teleportData_ and _customLoadingScreen_ are provided as arguments.

When fetching _teleportData_ and the _customLoadingScreen_ you are advised to use [TeleportService:GetLocalPlayerTeleportData](https://developer.roblox.com/en-us/api-reference/function/TeleportService/GetLocalPlayerTeleportData) and [TeleportService:GetArrivingTeleportGui](https://developer.roblox.com/en-us/api-reference/function/TeleportService/GetArrivingTeleportGui) instead. This is because these functions can be called immediately without having to wait for this event to fire.

This event should be connected immediately in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) parented to [ReplicatedFirst](https://developer.roblox.com/en-us/api-reference/class/ReplicatedFirst). Otherwise, when the connection is made the event may have already fired.

Loading screen
--------------

During a teleport, whilst the destination place is loading, the _customLoadingScreen_ is parented to the [CoreGui](https://developer.roblox.com/en-us/api-reference/class/CoreGui). Once the place has loaded the `ScreenGui|loading screen` is [parented](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) to _nil_.

If you wish to preserve the _customLoadingScreen_ and perform your own transitions, you will need to parent it to the `Players/LocalPlayer|LocalPlayer's` [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui). For example, using the following code inside a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) in [ReplicatedFirst](https://developer.roblox.com/en-us/api-reference/class/ReplicatedFirst):

local TeleportService = game:GetService("TeleportService")
local Players = game:GetService("Players")
local ReplicatedFirst = game:GetService("ReplicatedFirst")

TeleportService.LocalPlayerArrivedFromTeleport:Connect(function(customLoadingScreen, teleportData)
    local playerGui = Players.LocalPlayer:WaitForChild("PlayerGui")
    ReplicatedFirst:RemoveDefaultLoadingScreen()

    customLoadingScreen.Parent = playerGui
    -- animate screen here
    wait(5)
    -- destroy screen
    customLoadingScreen:Destroy()
end)

The _customLoadingScreen_ will not be used if the destination place is in a different game.

Studio limitation
-----------------

This service does not work during playtesting in Roblox Studio — To test aspects of your game using it, you must publish the game and play it in the Roblox application.