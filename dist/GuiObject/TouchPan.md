This event fires when the player moves their finger on the UI element
using a touch-enabled device. It fires shortly before
[`GuiObject.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchSwipe) would, and does not fire with
[`GuiObject.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchTap). This event is useful for allowing the player
to manipulate the position of UI elements on the screen.

This event fires with a table of [`Vector2`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2) that describe the
relative screen positions of the fingers involved in the gesture. In
addition, it fires several times with multiple [`Enum.UserInputState`](https://create.roblox.com/docs/reference/engine/enums/UserInputState)s:
Begin after a brief delay, Change when the player moves their finger
during the gesture and finally once more with End.

This event cannot be simulated in Studio using the emulator and a mouse;
you must have a real touch enabled device to fire this event.

Below is an animation of TouchPan firing on the black semitransparent
[`Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame) that covers the screen. The event is being used to
manipulate the position of the pink inner [`Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame). The code for this
can be found in the code samples.

![TouchPan firing on a real touch-enabled device](https://prod.docsiteassets.roblox.com/assets/legacy/GuiObjectTouchPanDemo.gif)

See also:

- [`GuiObject.TouchPinch`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPinch)
- [`GuiObject.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchRotate)
- [`GuiObject.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchTap)
- [`GuiObject.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchSwipe)
- [`GuiObject.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchLongPress)