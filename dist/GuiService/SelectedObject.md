Sets the [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject) currently being focused on by the GUI Navigator (used
for Gamepads). This may reset to nil if the object is off-screen.

This property is changed by the [GuiObject.SelectionGained](https://create.roblox.com/docs/reference/engine/classes/GuiObject#SelectionGained) and
[GuiObject.SelectionLost](https://create.roblox.com/docs/reference/engine/classes/GuiObject#SelectionLost) events.

If you would like to determine when this property changes without tracking
the SelectionGained and SelectionLost events for all GUI elements, you can
use the [Changed](https://create.roblox.com/docs/reference/engine/classes/Instance#Changed) event.