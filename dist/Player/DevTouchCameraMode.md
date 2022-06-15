The DevTouchCameraMode property determines the manner in which a player moves their camera when using a [TouchEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/TouchEnabled) device. See [DevTouchCameraMovementMode](https://developer.roblox.com/en-us/api-reference/enum/DevTouchCameraMovementMode) for a description of each camera control mode available. This property cannot be set using a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) (it must be set on the server using a [Script](https://developer.roblox.com/en-us/api-reference/class/Script)).

The default value of this property is determined by [StarterPlayer.DevTouchCameraMovementMode](https://developer.roblox.com/en-us/api-reference/property/StarterPlayer/DevTouchCameraMovementMode).

Note
----

*   When set to **UserChoice**, a player can choose between any control mode (except **Scriptable**) in the Roblox game settings. In general, it is a good idea to allow players to choose their control mode to maximize accessibility.
*   It is possible to create a custom control scheme by setting this property to **Scriptable**.
*   This property does not affect players who are not using a touch enabled device. See `Player/DevComputerCameraMovementMode` instead.