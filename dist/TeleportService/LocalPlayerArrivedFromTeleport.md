This function fires when the [`Players.LocalPlayer`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer) enters the place
following a teleport. The *teleportData* and *customLoadingScreen* are
provided as arguments.

When fetching *teleportData* and the *customLoadingScreen* you are advised
to use [`TeleportService:GetLocalPlayerTeleportData()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#GetLocalPlayerTeleportData) and
[`TeleportService:GetArrivingTeleportGui()`](https://create.roblox.com/docs/reference/engine/classes/TeleportService#GetArrivingTeleportGui) instead. This is because
these functions can be called immediately without having to wait for this
event to fire.

This event should be connected immediately in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript)
parented to [`ReplicatedFirst`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedFirst). Otherwise, when the connection is
made the event may have already fired.
#### Loading screen

During a teleport, while the destination place is loading, the
*customLoadingScreen* is parented to the [`CoreGui`](https://create.roblox.com/docs/reference/engine/classes/CoreGui). Once the place
has loaded the [`loading screen`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) is
[`parented`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) to *nil*.

If you wish to preserve the *customLoadingScreen* and perform your own
transitions, you will need to parent it to the
[`LocalPlayer's`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer) [`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui). For example,
using the following code inside a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) in
[`ReplicatedFirst`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedFirst):
```lua
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
```

The *customLoadingScreen* will not be used if the destination place is in
a different game.
#### Studio limitation

This service does not work during playtesting in Roblox Studio — To
test aspects of your game using it, you must publish the game and play it
in the Roblox application.