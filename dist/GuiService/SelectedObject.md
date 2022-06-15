Sets the [GuiObject](https://developer.roblox.com/en-us/api-reference/class/GuiObject) currently being focused on by the GUI Navigator (used for Gamepads). This may reset to nil if the object is off-screen.

This property is changed by the [GuiObject.SelectionGained](https://developer.roblox.com/en-us/api-reference/event/GuiObject/SelectionGained) and [GuiObject.SelectionLost](https://developer.roblox.com/en-us/api-reference/event/GuiObject/SelectionLost) events.

If you would like to determine when this property changes without tracking the SelectionGained and SelectionLost events for all GUI elements, you can use the [Changed](https://developer.roblox.com/en-us/api-reference/event/Instance/Changed) event.