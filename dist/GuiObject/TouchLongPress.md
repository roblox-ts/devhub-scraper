The TouchLongPress event fires after a brief moment when the player holds
their finger on the UI element using a touch-enabled device. It fires with
a table of [`Vector2`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2) that describe the relative screen positions
of the fingers involved in the gesture. In addition, it fires multiple
times with multiple [`Enum.UserInputState`](https://create.roblox.com/docs/reference/engine/enums/UserInputState)s: Begin after a brief delay,
Change if the player moves their finger during the gesture and finally
with End. The delay is platform dependent; in Studio it is a little longer
than one second.

Since this event only requires one finger, this event can be simulated in
Studio using the emulator and a mouse.

Below is an example of TouchLongPress firing on a Frame that is
[`GuiObject.Active`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Active). Below, the event fires after a brief delay
(Begin) and then continually as as the finger is moved (Change). It fires
one last time after it is released (End).

![TouchLongPress gesture](https://prod.docsiteassets.roblox.com/assets/legacy/GuiObjectTouchLongPressDemo.gif)

See also:

- [`UserInputService.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchLongPress), an event with the same
functionality but is not restricted to a specific [`GUI`](https://create.roblox.com/docs/reference/engine/classes/GuiObject)
- [`GuiObject.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPan)
- [`GuiObject.TouchPinch`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPinch)
- [`GuiObject.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchRotate)
- [`GuiObject.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchTap)
- [`GuiObject.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchSwipe)