The TouchPinch event fires when the player uses two fingers to make a
pinch or pull gesture on the UI element using a touch-enabled device. A
**pinch** happens when two or more fingers move closer together, and a
**pull** happens when they move apart. This event fires in conjunction
with [`GuiObject.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPan). This event is useful for allowing the
player to manipulate the scale (size) of UI elements on the screen, and is
most often used for zooming features.

This event fires with a table of [`Vector2`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2) that describe the
relative screen positions of the fingers involved in the gesture. In
addition, it fires several times with multiple [`Enum.UserInputState`](https://create.roblox.com/docs/reference/engine/enums/UserInputState)s:
Begin after a brief delay, Change when the player moves a finger during
the gesture and finally once more with End. It should be noted that the
scale should be used **multiplicatively**.

Since this event requires at least two fingers, it is not possible to be
simulated in Studio using the emulator and a mouse; you must have a real
touch-enabled device (and also least two fingers, try asking a friend).
Below is an animation of TouchPinch firing on the black semitransparent
[`Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame) that covers the screen (note the touch positions marked with
white circles). The event is being used to manipulate the scale of the
[`TextLabel`](https://create.roblox.com/docs/reference/engine/classes/TextLabel) that says "Hi!". The code for this can be found in the
code samples.

![TouchPinch firing on a real touch device](https://prod.docsiteassets.roblox.com/assets/legacy/GuiObjectTouchPinchDemo.gif)

See also:

- [`GuiObject.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPan)
- [`GuiObject.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchRotate)
- [`GuiObject.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchTap)
- [`GuiObject.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchSwipe)
- [`GuiObject.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchLongPress)