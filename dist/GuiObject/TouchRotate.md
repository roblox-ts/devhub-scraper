The TouchRotate event fires when the player uses two fingers to make a
pinch or pull gesture on the UI element using a touch-enabled device.
Rotation occurs when the angle of the line between two fingers changes.
This event fires in conjunction with [`GuiObject.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPan). This
event is useful for allowing the player to manipulate the rotation of UI
elements on the screen.

This event fires with a table of [`Vector2`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2) that describe the
relative screen positions of the fingers involved in the gesture. In
addition, it fires several times with multiple [`Enum.UserInputState`](https://create.roblox.com/docs/reference/engine/enums/UserInputState)s:
Begin after a brief delay, Change when the player moves a finger during
the gesture and finally once more with End.

Since this event requires at least two fingers, it is not possible to be
simulated in Studio using the emulator and a mouse; you must have a real
touch-enabled device (and also least two fingers, try asking a friend).

See also:

- [`GuiObject.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPan)
- [`GuiObject.TouchPinch`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPinch)
- [`GuiObject.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchTap)
- [`GuiObject.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchSwipe)
- [`GuiObject.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchLongPress)