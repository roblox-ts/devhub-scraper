A UIGridLayout (not to be confused with the abstract [UIGridStyleLayout](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout) from
which this class inherits) lays out sibling UI elements in multiple rows
within the parent UI element, adding elements to a row one-by-one until the
next element would not fit. It then continues adding elements in the next row.
A UIGridLayout will take UI elements' [GuiObject.Size](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Size) and
[GuiObject.Position](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Position) under control. While under control, these UI elements'
properties will not be editable in the Properties window.

![A UIGridLayout arranging inventory slots in a grid][1]

By default, it lays out elements from left-to-right, top-to-bottom in
**alphabetical** order, but this can be changed to use elements'
[GuiObject.LayoutOrder](https://create.roblox.com/docs/reference/engine/classes/GuiObject#LayoutOrder) by changing [UIListLayout.SortOrder](https://create.roblox.com/docs/reference/engine/classes/UIListLayout#SortOrder) to LayoutOrder. A
UIListLayout will automatically re-layout elements when elements are
added/removed, or if a relevant property changes: [GuiObject.LayoutOrder](https://create.roblox.com/docs/reference/engine/classes/GuiObject#LayoutOrder) or
[Instance.Name](https://create.roblox.com/docs/reference/engine/classes/Instance#Name). This can be triggered manually by calling
[UIGridStyleLayout:ApplyLayout](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout#ApplyLayout), though this is typically not necessary.

The actual cell sizes are the same for all cells. A UIGridLayout will respect
UI constraints placed with it, such as [UISizeConstraint](https://create.roblox.com/docs/reference/engine/classes/UISizeConstraint) and
[UIAspectRatioConstraint](https://create.roblox.com/docs/reference/engine/classes/UIAspectRatioConstraint). Elements in the layout can span multiple cells if
they have a [UISizeConstraint](https://create.roblox.com/docs/reference/engine/classes/UISizeConstraint) with a [MinSize](https://create.roblox.com/docs/reference/engine/classes/UISizeConstraint#MinSize) set
higher than the [CellSize](https://create.roblox.com/docs/reference/engine/classes/UIGridLayout#CellSize). It is possible to limit the
number of elements per row using [UIGridLayout.FillDirectionMaxCells](https://create.roblox.com/docs/reference/engine/classes/UIGridLayout#FillDirectionMaxCells). If set
to 1, it is possible to create a single row of elements (as each element would
be positioned in its own row).

This layout is appropriate when line breaks are OK after arbitrary cells. For
example, a set of inventory spaces is a good use of this layout. If building a
table of values in which a line break is not appropriate in the middle of
tabular data, it might be a better idea to use a [UITableLayout](https://create.roblox.com/docs/reference/engine/classes/UITableLayout) instead.

[1]: https://prod.docsiteassets.roblox.com/assets/bltdf5323e2df741820/GamepadGrid_Image03.png