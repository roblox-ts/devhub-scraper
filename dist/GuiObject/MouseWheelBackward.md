The WheelBackward event fires when a user scrolls their mouse wheel back
when the mouse is over a [`GUI`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) element. It is similar to
[`Mouse.WheelBackward`](https://create.roblox.com/docs/reference/engine/classes/Mouse#WheelBackward), which fires regardless whether the user's
mouse is over a GUI element.

This event fires merely as an indicator of the wheel's backward movement.
This means that the x and y mouse coordinate arguments don't change as a
result of this event. These coordinates only change when the mouse moves,
which can be tracked by the [`GuiObject.MouseMoved`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseMoved) event.

See also:

- [`GuiObject.MouseEnter`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseEnter)
- [`GuiObject.MouseLeave`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseLeave)
- [`GuiObject.MouseMoved`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseMoved)
- [`GuiObject.MouseWheelForward`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseWheelForward)