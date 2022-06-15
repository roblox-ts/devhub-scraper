The LocalPlayer will be set automatically when a client connects to the game, so uses for this method are extremely limited. This function is protected, attempting to use it in a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) will cause an error.

Although you cannot create the LocalPlayer, you can reference the LocalPlayer created by a game using the following code in a LocalScript:

	local player = game.Players.LocalPlayer