The MouseButton1Click event fires when the user's [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) fully left
clicks the GUI button.

By clicking, the mouse has to be in bounds of the button and has to be
pressed down and up again before this event fires. If the mouse leaves the
bounds of the button and is released, the event will not fire. If you
would like to avoid this limitation, you can use
[`GuiButton.MouseButton1Down`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#MouseButton1Down) and `MouseButton1Up`. These events are
similar, but will fire whenever the user pressed their left mouse down or
up, respectively.

This event is similar to [`GuiButton.MouseButton2Click`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#MouseButton2Click), which
behaves identically except that it is connected to the user's right mouse
button.

Note that this event will only fire for GUI buttons, including
[`TextButtons`](https://create.roblox.com/docs/reference/engine/classes/TextButton) and [`ImageButton`](https://create.roblox.com/docs/reference/engine/classes/ImageButton). It will not fire
for other [`GuiObjects`](https://create.roblox.com/docs/reference/engine/classes/GuiObject).