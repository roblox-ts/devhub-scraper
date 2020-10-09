A UIGridLayout (not to be confused with the abstract [UIGridStyleLayout](https://developer.roblox.com/en-us/api-reference/class/UIGridStyleLayout) from which this class inherits) lays out sibling UI elements in multiple rows within the parent UI element, adding elements to a row one-by-one until the next element would not fit. It then continues adding elements in the next row. A UIGridLayout will take UI elements' [GuiObject.Size](https://developer.roblox.com/en-us/api-reference/property/GuiObject/Size) and [GuiObject.Position](https://developer.roblox.com/en-us/api-reference/property/GuiObject/Position) under control. While under control, these UI elements' properties will not be editable in the Properties window.

![A UIGridLayout arranging inventory slots in a grid](https://developer.roblox.com/assets/bltdf5323e2df741820/GamepadGrid_Image03.png)

By default, it lays out elements from left-to-right, top-to-bottom in **alphabetical** order, but this can be changed to use elements' [GuiObject.LayoutOrder](https://developer.roblox.com/en-us/api-reference/property/GuiObject/LayoutOrder) by changing `UIListLayout/SortOrder` to LayoutOrder. A UIListLayout will automatically re-layout elements when elements are added/removed, or if a relevant property changes: [GuiObject.LayoutOrder](https://developer.roblox.com/en-us/api-reference/property/GuiObject/LayoutOrder) or [Instance.Name](https://developer.roblox.com/en-us/api-reference/property/Instance/Name). This can be triggered manually by calling [UIGridStyleLayout:ApplyLayout](https://developer.roblox.com/en-us/api-reference/function/UIGridStyleLayout/ApplyLayout), though this is typically not necessary.

The actual cell sizes are the same for all cells. A UIGridLayout will respect UI constraints placed with it, such as [UISizeConstraint](https://developer.roblox.com/en-us/api-reference/class/UISizeConstraint) and [UIAspectRatioConstraint](https://developer.roblox.com/en-us/api-reference/class/UIAspectRatioConstraint). Elements in the layout can span multiple cells if they have a [UISizeConstraint](https://developer.roblox.com/en-us/api-reference/class/UISizeConstraint) with a [MinSize](https://developer.roblox.com/en-us/api-reference/property/UISizeConstraint/MinSize) set higher than the [CellSize](https://developer.roblox.com/en-us/api-reference/property/UIGridLayout/CellSize). It is possible to limit the number of elements per row using [UIGridLayout.FillDirectionMaxCells](https://developer.roblox.com/en-us/api-reference/property/UIGridLayout/FillDirectionMaxCells). If set to 1, it is possible to create a single row of elements (as each element would be positioned in its own row).

This layout is appropriate when line breaks are OK after arbitrary cells. For example, a set of inventory spaces is a good use of this layout. If building a table of values in which a line break is not appropriate in the middle of tabular data, it might be a better idea to use a [UITableLayout](https://developer.roblox.com/en-us/api-reference/class/UITableLayout) instead.