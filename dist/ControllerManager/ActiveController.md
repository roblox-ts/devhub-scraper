The [`ControllerBase`](https://create.roblox.com/docs/reference/engine/classes/ControllerBase) that is set to be activated on the character.
It does not guarantee that the specified [`ControllerBase`](https://create.roblox.com/docs/reference/engine/classes/ControllerBase) is, in
fact, active. If the [`ControllerBase`](https://create.roblox.com/docs/reference/engine/classes/ControllerBase) cannot be activated for
whatever reason, such as being outside of the character's
[`WorldRoot`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot) or no [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) being found to use as the floor for a
[`GroundController`](https://create.roblox.com/docs/reference/engine/classes/GroundController), it will remain set and the
[`ControllerManager`](https://create.roblox.com/docs/reference/engine/classes/ControllerManager) will attempt to activate it in the next frame.