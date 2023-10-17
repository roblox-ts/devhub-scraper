The DevTouchCameraMode property determines the manner in which a player
moves their camera when using a
[`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) device. See
[`Enum.DevTouchCameraMovementMode`](https://create.roblox.com/docs/reference/engine/enums/DevTouchCameraMovementMode) for a description of each camera control
mode available. This property cannot be set using a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript)
(it must be set on the server using a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script)).

The default value of this property is determined by
[`StarterPlayer.DevTouchCameraMovementMode`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#DevTouchCameraMovementMode).

When set to **UserChoice**, a player can choose between any control mode
(except **Scriptable**) in the Roblox game settings. In general, it is a
good idea to allow players to choose their control mode to maximize
accessibility.

It's possible to create a custom control scheme by setting this property
to **Scriptable**.

This property doesn't affect players who aren't using a touch-enabled
device. See [`Player.DevComputerCameraMovementMode`](https://create.roblox.com/docs/reference/engine/classes/Player#DevComputerCameraMovementMode) instead.