The TouchSwipe event fires when the player performs a swipe gesture on the
UI element using a touch-enabled device. It fires with the direction of
the gesture (Up, Down, Left or Right) and the number of touch points
involved in the gesture. Swipe gestures are often used to change tabs in
mobile UIs.

Since this event only requires one finger, this event can be simulated in
Studio using the emulator and a mouse. Below is an example of TouchSwipe
being fired on a Frame that is [`GuiObject.Active`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Active). Below, the event
fires when the Frame moves and changes color slightly. The code for this
can be found the code samples.

![TouchSwipe event firing on a Frame](https://prod.docsiteassets.roblox.com/assets/legacy/GuiObjectTouchSwipeDemo.gif)

See also:

- [`GuiObject.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPan)
- [`GuiObject.TouchPinch`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPinch)
- [`GuiObject.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchRotate)
- [`GuiObject.TouchTap`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchTap)
- [`GuiObject.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchLongPress)