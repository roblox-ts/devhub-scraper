This property determines whether a ~GuiObject|GUI` can be selected when
navigating GUIs using a gamepad.

If this property is true, a GUI can be selected. Selecting a GUI also sets
the `GuiService/SelectedObject` property to that object.

When this is false, the GUI cannot be selected. However, setting this to
false when a GUI is selected will not deselect it nor change the value of
the GuiService's SelectedObject property.

Add `GuiObject/SelectionGained` and `GuiObject/SelectionLost` will not
fire for the element. To deselect a GuiObject, you must change
`GuiService|GuiService's` SelectedObject property.

This property is useful if a GUI is connected to several GUIs via
properties such as this `GuiObject/NextSelectionUp`,
`GuiObject/NextSelectionDown`, `GuiObject|NextSelectionRight`, or
`GuiObject|NextSelectionLeft`. Rather than change all of the properties so
that the Gamepad cannot select the GUI, you can disable its Selectable
property to temporarily prevent it from being selected. Then, when you
want the gamepad selector to be able to select the GUI, simply re-enable
its selectable property.