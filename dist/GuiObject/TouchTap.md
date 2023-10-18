The TouchTap event fires when the player performs a tap gesture on the UI
element using a touch-enabled device. A tap is a quick single touch
without any movement involved (a longer press would fire
[`GuiObject.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchLongPress), and moving during the touch would fire
[`GuiObject.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPan) and/or [`GuiObject.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchSwipe)). It fires
with a table of [`Vector2`](https://create.roblox.com/docs/reference/engine/datatypes/Vector2)s that describe the relative positions
of the fingers involved in the gesture.

Since this event only requires one finger, this event can be simulated in
Studio using the emulator and a mouse. Below is an example of TouchTap
being fired on a Frame that is [`GuiObject.Active`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Active). Below, the event
fires when the cursor briefly pauses (to simulate a tap) and the Frame
toggles its [`GuiObject.BackgroundTransparency`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundTransparency). The code for this
can be found the code samples.

![TouchTap being fired on a Frame using Studio's emulator](https://prod.docsiteassets.roblox.com/assets/legacy/GuiObjectTouchTapDemo.gif)

See also:

- [`GuiObject.TouchPan`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPan)
- [`GuiObject.TouchPinch`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchPinch)
- [`GuiObject.TouchRotate`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchRotate)
- [`GuiObject.TouchSwipe`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchSwipe)
- [`GuiObject.TouchLongPress`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchLongPress)