HopperBins are an outdated system for creating tools that can be used by a
player. In place of HopperBins, please use [Tool](https://create.roblox.com/docs/reference/engine/classes/Tool) instead.

Historically, only HopperBins worked without a 'Handle' [Part](https://create.roblox.com/docs/reference/engine/classes/Part), but this is no
longer the case thanks to the [Tool.RequiresHandle](https://create.roblox.com/docs/reference/engine/classes/Tool#RequiresHandle) property of Tools.

For capturing user input (from the Mouse for example), it is no longer
necessary to use HopperBins or Tools. Instead, please use these alternatives:

- [ContextActionService](https://create.roblox.com/docs/reference/engine/classes/ContextActionService)
- [UserInputService](https://create.roblox.com/docs/reference/engine/classes/UserInputService)
- [Player:GetMouse](https://create.roblox.com/docs/reference/engine/classes/Player#GetMouse)