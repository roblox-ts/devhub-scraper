This property overrides the default selection adornment (used for
gamepads). For best results, this should point to a [GUI](https://create.roblox.com/docs/reference/engine/classes/GuiObject).

Note that the SelectionImageObject overlays the selected GUI with the
[GuiObject.Size](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Size) of the image. For best results when using a non-default
SelectionImageObject, you should size the SelectionImageObject via the
scale [UDim2](https://developer.roblox.com/en-us/api-reference/datatype/UDim2) values. This helps ensure that the object scales
properly over the selected element.

The default SelectionImageObject is a blue and white square outline around
the selected GUI element. In the image below, the selected GUI is a white
[Frame](https://create.roblox.com/docs/reference/engine/classes/Frame).

![Default SelectionImageObject][1]

For instance, changing the SelectionImageObject to a [ImageLabel](https://create.roblox.com/docs/reference/engine/classes/ImageLabel) with red
and white square outline [image][2], [GuiObject.BackgroundTransparency](https://create.roblox.com/docs/reference/engine/classes/GuiObject#BackgroundTransparency) of
1, [GuiObject.Size](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Size) of _UDim2(1.1, 0, 1.1, 0)_, and [GuiObject.Position](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Position)
of _UDim2(-0.05, 0, -0.05, 0)_ results in the image below:

![Custom SelectionImageObject][3]

Changing the SelectionImageObject for a GUI element only affects that
element. To change the SelectionImageObject for all of a user's GUI
elements, you can set the [PlayerGui.SelectionImageObject](https://create.roblox.com/docs/reference/engine/classes/PlayerGui#SelectionImageObject) property.

To determine or set which GUI element is selected by the user, you can use
the [GuiService.SelectedObject](https://create.roblox.com/docs/reference/engine/classes/GuiService#SelectedObject) property. The user uses the gamepad to
select different GUI elements, invoking the [GuiObject.NextSelectionUp](https://create.roblox.com/docs/reference/engine/classes/GuiObject#NextSelectionUp),
[GuiObject.NextSelectionDown](https://create.roblox.com/docs/reference/engine/classes/GuiObject#NextSelectionDown), [GuiObject.NextSelectionLeft](https://create.roblox.com/docs/reference/engine/classes/GuiObject#NextSelectionLeft), and
[GuiObject.NextSelectionRight](https://create.roblox.com/docs/reference/engine/classes/GuiObject#NextSelectionRight) events.

[1]: https://prod.docsiteassets.roblox.com/assets/bltae6b98faea42f3d1/Screen_Shot_2018-09-13_at_9.57.14_PM.png
[2]: https://www.roblox.com/library/2347505468/SelectionImage-Red
[3]: https://prod.docsiteassets.roblox.com/assets/blt5f5f0cf0d10b4e57/Screen_Shot_2018-09-13_at_9.53.54_PM.png