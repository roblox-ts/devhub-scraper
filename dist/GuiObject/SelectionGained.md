This event fires when the Gamepad selector starts focusing on the [GuiObject](https://developer.roblox.com/en-us/api-reference/class/GuiObject).

If you want to check from the Gamepad select stops focusing on the GUI element, you can use the [GuiObject.SelectionLost](https://developer.roblox.com/en-us/api-reference/event/GuiObject/SelectionLost) event.

When a GUI gains selection focus, the value of the `GuiService/SelectionObject|SelectionObject` property also changes to the that gains selection. To determine which GUI gained selection, check the value of this property.