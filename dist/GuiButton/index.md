GuiButton is an abstract class that inherits from [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject). It is the
base class for [`ImageButton`](https://create.roblox.com/docs/reference/engine/classes/ImageButton) and [`TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton). Objects of this
type serve to be interactive, clickable user interface elements. It defines
several properties for interaction behavior, namely
[`GuiButton.AutoButtonColor`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#AutoButtonColor) and [`GuiButton.Modal`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#Modal), as well as a
handful of events for mouse buttons ([`GuiButton.MouseButton1Click`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#MouseButton1Click),
[`GuiButton.MouseButton1Down`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#MouseButton1Down), etc).

The most important event of a GuiButton is [`GuiButton.Activated`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#Activated), a
**multi-platform event** that fires when the button is activated. When using a
mouse, this means clicking the button and releasing with the cursor still over
the UI object. For touch, the same applies but with a touch instead of button
press. Finally, for gamepads, [`GuiButton.Activated`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#Activated) fires if a GuiButton
is selected when the A-button is pressed and released. In short, this event is
very useful for multi-platform user interface programming as it provides a
nice general interface for a single user input.