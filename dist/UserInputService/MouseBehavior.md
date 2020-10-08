This property sets how the user's mouse behaves based on the [MouseBehavior](https://developer.roblox.com/en-us/api-reference/enum/MouseBehavior) Enum. The default value is Enum.MouseBehavior.Default.

It can be set to three values:

1.  _Default_: The mouse moves freely around the user's screen.
2.  _LockCenter_: The mouse is locked, and cannot move from, the center of the user's screen.
3.  _LockCurrentPosition_: The mouse is locked, and cannot move from, it's current position on the user's screen at the time of locking.

The value of this property does not affect the sensitivity of events tracking mouse movement. For example, [GetMouseDelta](https://developer.roblox.com/en-us/api-reference/function/UserInputService/GetMouseDelta) returns the same [Vector2](https://developer.roblox.com/en-us/api-reference/datatype/Vector2) screen position in pixels regardless of whether the mouse is locked or able to move freely around the user's screen. As a result, default scripts like those controlling the camera are not impacted by this property.

This property is overridden if a [GuiButton](https://developer.roblox.com/en-us/api-reference/class/GuiButton) with [Modal](https://developer.roblox.com/en-us/api-reference/property/GuiButton/Modal) enabled is `GuiButton/Visible` unless the player's right mouse button is down.

Note that, if the mouse is locked, [UserInputService.InputChanged](https://developer.roblox.com/en-us/api-reference/event/UserInputService/InputChanged) will still fire when the player moves the mouse and will pass in the Delta that the mouse attempted to move by. Additionally, if the player is kicked from the game, the mouse will be forcefully unlocked.

As [UserInputService](https://developer.roblox.com/en-us/api-reference/class/UserInputService) is client-side only, this property can only be used in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).