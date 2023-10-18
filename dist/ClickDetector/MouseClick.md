This event fires from either a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) when
a player interacts with a [`ClickDetector`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector) or [`DragDetector`](https://create.roblox.com/docs/reference/engine/classes/DragDetector)
via the following inputs:

- On platforms with a mouse, when the player left mouse clicks.
- On [`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) platforms, when
the player taps.
- On [`GamepadEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#GamepadEnabled) platforms,
when the center dot is over the same model and the **A** button is
pressed and released.

Note that the player's [`Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) must be within
the [`MaxActivationDistance`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MaxActivationDistance) of
the detector.