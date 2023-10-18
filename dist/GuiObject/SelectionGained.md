This event fires when the Gamepad selector starts focusing on the
[`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject).

If you want to check from the Gamepad select stops focusing on the GUI
element, you can use the [`GuiObject.SelectionLost`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#SelectionLost) event.

When a GUI gains selection focus, the value of the
[`SelectionObject`](https://create.roblox.com/docs/reference/engine/classes/GuiService#SelectionObject) property also changes
to the that gains selection. To determine which GUI gained selection,
check the value of this property.