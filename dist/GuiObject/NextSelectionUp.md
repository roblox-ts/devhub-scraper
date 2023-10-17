This property sets the [`GUI`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) selected when the user moves
the Gamepad selector upward. If this property is left blank, the moving
the Gamepad upward will not change the selected GUI.

Moving the Gamepad selector upward sets the
[`GuiService.SelectedObject`](https://create.roblox.com/docs/reference/engine/classes/GuiService#SelectedObject) to this object unless the GUI is not
[`Selectable`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Selectable). If the specified GUI is not
selectable, it will not be selected when the gamepad selected moves
upward.

Note that since this property can be set to a GUI element even if it is
not Selectable, you should ensure that the value of a GUI's selectable
property matching your expected behavior.

See also:

- [`GuiObject.NextSelectionDown`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#NextSelectionDown)
- [`GuiObject.NextSelectionLeft`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#NextSelectionLeft)
- [`GuiObject.NextSelectionRight`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#NextSelectionRight)