The MouseButton2Down event fires when the user presses their left
[`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) button down on the GUI object.

This event is similar to [`GuiButton.MouseButton1Down`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#MouseButton1Down), which behaves
identically except that it is connected to the user's left mouse button.

If you are looking for an event requiring the user to press and release
their right mouse on a GUI in order for the event to fire, consider using
[`GuiButton.MouseButton2Click`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#MouseButton2Click).

Note that this event will only fire for GUI buttons, including
[`TextButtons`](https://create.roblox.com/docs/reference/engine/classes/TextButton) and [`ImageButton`](https://create.roblox.com/docs/reference/engine/classes/ImageButton). It will not fire
for other [`GuiObjects`](https://create.roblox.com/docs/reference/engine/classes/GuiObject).