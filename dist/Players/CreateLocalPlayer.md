The games uses this function is to create the [Players.LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer). Since this item is protected, attempting to use it in a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) will cause an error.

Although you cannot create the LocalPlayer, you can reference the LocalPlayer created by a game using the following code in a LocalScript:

	local player = game.Players.LocalPlayer