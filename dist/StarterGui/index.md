The StarterGui service is a container object designed to hold `LayerCollector|GUI objects` such as [ScreenGuis](https://developer.roblox.com/en-us/api-reference/class/ScreenGui).

StarterGui as a container
-------------------------

When a `Player|Players'` [character](https://developer.roblox.com/en-us/api-reference/property/Player/Character) respawns, the contents of their [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui) is emptied. Children of the [StarterGui](https://developer.roblox.com/en-us/api-reference/class/StarterGui) are then copied along with their descendants into the [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui).

`LayerCollector|GUI objects` such as [ScreenGuis](https://developer.roblox.com/en-us/api-reference/class/ScreenGui) with their [ResetOnSpawn](https://developer.roblox.com/en-us/api-reference/property/LayerCollector/ResetOnSpawn) property set to false will only be placed into each `Player|Player's` [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui) once and will not be deleted when the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) respawns.

StarterGui as an interface
--------------------------

The StarterGui also includes a range of functions allowing you to interact with the [CoreGui](https://developer.roblox.com/en-us/api-reference/class/CoreGui). For example [StarterGui:SetCoreGuiEnabled](https://developer.roblox.com/en-us/api-reference/function/StarterGui/SetCoreGuiEnabled) can be used to disable elements of the [CoreGui](https://developer.roblox.com/en-us/api-reference/class/CoreGui). [StarterGui:SetCore](https://developer.roblox.com/en-us/api-reference/function/StarterGui/SetCore) can perform a range of functions including creating notifications and system messages.