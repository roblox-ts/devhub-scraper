The StarterGui service is a container object designed to hold
[GUI objects](https://create.roblox.com/docs/reference/engine/classes/LayerCollector) such as [ScreenGuis](https://create.roblox.com/docs/reference/engine/classes/ScreenGui).

## StarterGui as a container

When a [Players'](https://create.roblox.com/docs/reference/engine/classes/Player) [character](https://create.roblox.com/docs/reference/engine/classes/Player#Character) respawns, the contents
of their [PlayerGui](https://create.roblox.com/docs/reference/engine/classes/PlayerGui) is emptied. Children of the [StarterGui](https://create.roblox.com/docs/reference/engine/classes/StarterGui) are then copied
along with their descendants into the [PlayerGui](https://create.roblox.com/docs/reference/engine/classes/PlayerGui).

[GUI objects](https://create.roblox.com/docs/reference/engine/classes/LayerCollector) such as [ScreenGuis](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) with their
[ResetOnSpawn](https://create.roblox.com/docs/reference/engine/classes/LayerCollector#ResetOnSpawn) property set to false will only be
placed into each [Player's](https://create.roblox.com/docs/reference/engine/classes/Player) [PlayerGui](https://create.roblox.com/docs/reference/engine/classes/PlayerGui) once and will not be deleted
when the [Player](https://create.roblox.com/docs/reference/engine/classes/Player) respawns.

## StarterGui as an interface

The StarterGui also includes a range of functions allowing you to interact
with the [CoreGui](https://create.roblox.com/docs/reference/engine/classes/CoreGui). For example [StarterGui:SetCoreGuiEnabled](https://create.roblox.com/docs/reference/engine/classes/StarterGui#SetCoreGuiEnabled) can be used to
disable elements of the [CoreGui](https://create.roblox.com/docs/reference/engine/classes/CoreGui). [StarterGui:SetCore](https://create.roblox.com/docs/reference/engine/classes/StarterGui#SetCore) can perform a range of
functions including creating notifications and system messages.