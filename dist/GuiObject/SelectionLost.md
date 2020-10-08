This event fires when the Gamepad selector stops focusing on the [GUI](https://developer.roblox.com/en-us/api-reference/class/GuiObject).

If you want to check from the Gamepad select starts focusing on the GUI element, you can use the [GuiObject.SelectionGained](https://developer.roblox.com/en-us/api-reference/event/GuiObject/SelectionGained) event.

When a GUI loses selection focus, the value of the `GuiService/SelectionObject|SelectionObject` property changes either to nil or to the GUI element that gains selection focus. To determine which GUI gained selection, or if no GUI is selected, check the value of this property.