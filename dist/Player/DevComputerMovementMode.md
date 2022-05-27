The DevComputerMovementMode property determines the manner in which a
player moves their character when using a mouse-and-keyboard device
device. See [DevComputerMovementMode](https://developer.roblox.com/en-us/api-reference/enum/DevComputerMovementMode) for a description of each
movement control mode available. This property cannot be set using a
[LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) (it must be set on the server using a [Script](https://create.roblox.com/docs/reference/engine/classes/Script)).

The default value of this property is determined by
[StarterPlayer.DevComputerMovementMode](https://create.roblox.com/docs/reference/engine/classes/StarterPlayer#DevComputerMovementMode).

#### Note

- The word "Computer" in this property name refers to
  non-[TouchEnabled](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) devices.
- When set to **UserChoice**, a player can choose between any control mode
  (except **Scriptable**) in the Roblox game settings. In general, it is a
  good idea to allow players to choose their control mode to maximize
  accessibility.
- It is possible to create a custom control scheme by setting this
  property to **Scriptable**.
- This property does not affect players using a touch enabled device. See
  [Player.DevTouchMovementMode ](https://create.roblox.com/docs/reference/engine/classes/Player#DevTouchMovementMode ) instead.