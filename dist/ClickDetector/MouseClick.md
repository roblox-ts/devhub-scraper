The MouseClick event fires when a player presses and releases the left mouse button while the cursor is hovering over a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) or [Model](https://developer.roblox.com/en-us/api-reference/class/Model) with a [ClickDetector](https://developer.roblox.com/en-us/api-reference/class/ClickDetector). Additionally, the Player's [Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character) must be within the [MaxActivationDistance](https://developer.roblox.com/en-us/api-reference/property/ClickDetector/MaxActivationDistance) of the clicked object. This event fires when using either a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

Platform Support
----------------

*   On [TouchEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/TouchEnabled) platforms, this event fires when the user taps on the same model.
*   On [GamepadEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/GamepadEnabled) platforms, this event fires when the center dot is over the same model and the A button is pressed and released.

Related Events
--------------

*   If you want to check when a player right clicks on the ClickDetector, you can use the [RightMouseClick](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/RightMouseClick) event.
*   If you want a function to fire when a player hovers on or off of the ClickDetector without mouse clicking it you can use the [MouseHoverEnter](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/MouseHoverEnter) and [MouseHoverLeave](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/MouseHoverLeave) events.