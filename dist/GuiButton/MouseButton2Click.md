The MouseButton2Click event fires when the user's [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) fully
right clicks the GUI button.

By clicking, the mouse has to be in bounds of the button and has to be
pressed down and up again before this event fires. If the mouse leaves the
bounds of the button and is released, the event will not fire. If you
would like to avoid this limitation, you can use
[`GuiButton.MouseButton2Down`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#MouseButton2Down) and `MouseButton2Up`. These events are
similar, but will fire whenever the user pressed their left mouse down or
up, respectively.

This event is similar to [`GuiButton.MouseButton1Click`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#MouseButton1Click), which
behaves identically except that it is connected to the user's left mouse
button.

Note that this event will only fire for GUI buttons, including
[`TextButtons`](https://create.roblox.com/docs/reference/engine/classes/TextButton) and [`ImageButton`](https://create.roblox.com/docs/reference/engine/classes/ImageButton). It will not fire
for other [`GuiObjects`](https://create.roblox.com/docs/reference/engine/classes/GuiObject).