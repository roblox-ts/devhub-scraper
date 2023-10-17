This property determines whether a ~GuiObject|GUI` can be selected when
navigating GUIs using a gamepad.

If this property is true, a GUI can be selected. Selecting a GUI also sets
the [`GuiService.SelectedObject`](https://create.roblox.com/docs/reference/engine/classes/GuiService#SelectedObject) property to that object.

When this is false, the GUI cannot be selected. However, setting this to
false when a GUI is selected will not deselect it nor change the value of
the GuiService's SelectedObject property.

Add [`GuiObject.SelectionGained`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#SelectionGained) and [`GuiObject.SelectionLost`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#SelectionLost)
will not fire for the element. To deselect a GuiObject, you must change
[`GuiService's`](https://create.roblox.com/docs/reference/engine/classes/GuiService) SelectedObject property.

This property is useful if a GUI is connected to several GUIs via
properties such as this [`GuiObject.NextSelectionUp`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#NextSelectionUp),
[`GuiObject.NextSelectionDown`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#NextSelectionDown), [`NextSelectionRight`](https://create.roblox.com/docs/reference/engine/classes/GuiObject),
or [`NextSelectionLeft`](https://create.roblox.com/docs/reference/engine/classes/GuiObject). Rather than change all of the
properties so that the Gamepad cannot select the GUI, you can disable its
Selectable property to temporarily prevent it from being selected. Then,
when you want the gamepad selector to be able to select the GUI, simply
re-enable its selectable property.