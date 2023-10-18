The MouseButton1Up event fires when the user releases their left
[`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) up off of the GUI object.

This event is similar to [`GuiButton.MouseButton2Up`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#MouseButton2Up), which behaves
identically except that it is connected to the user's right mouse button.

If you are looking for an event requiring the user to press and release
their left mouse on a GUI in order for the event to fire, consider using
[`GuiButton.MouseButton1Click`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#MouseButton1Click).

Note that this event will only fire for GUI buttons, including
[`TextButtons`](https://create.roblox.com/docs/reference/engine/classes/TextButton) and [`ImageButton`](https://create.roblox.com/docs/reference/engine/classes/ImageButton). It will not fire
for other [`GuiObjects`](https://create.roblox.com/docs/reference/engine/classes/GuiObject).