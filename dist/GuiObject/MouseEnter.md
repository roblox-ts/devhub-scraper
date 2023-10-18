The MouseEnter event fires when a user moves their mouse into a
[`GUI`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) element.

Please do not rely on the `x` and `y` arguments passed by this event as a
fool-proof way to to determine where the user's mouse is when it enters a
GUI. These coordinates may vary even when the mouse enters the GUI via the
same edge - particularly when the mouse enters the element quickly. This
is due to the fact the coordinates indicate the position of the mouse when
the event fires rather than the exact moment the mouse enters the GUI.

This event fires even when the GUI element renders beneath another
element.

If you would like to track when a user's mouse leaves a GUI element, you
can use the [`GuiObject.MouseLeave`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseLeave) event.

See also:

- [`GuiObject.MouseLeave`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseLeave)
- [`GuiObject.MouseMoved`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseMoved)
- [`GuiObject.MouseWheelForward`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseWheelForward)
- [`GuiObject.MouseWheelBackward`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseWheelBackward)