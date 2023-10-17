A UITableLayout lays out sibling UI elements as rows in a table. Child UI
elements (the table cells) of these rows are then arranged in columns (within
rows). Each cell within a row has the same height, and each cell within a
column has the same width. The hierarchy in the explorer should look like this
([`Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame)s are yellow rows, [`TextLabel`](https://create.roblox.com/docs/reference/engine/classes/TextLabel)s are cells)
![Hierarchy of UI elements used with a UITableLayout](https://prod.docsiteassets.roblox.com/assets/legacy/UITableLayout_Hierarchy.png)
![UITableLayout result](https://prod.docsiteassets.roblox.com/assets/legacy/UITableLayout_Padding.png)

By changing the [`UIGridStyleLayout.FillDirection`](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout#FillDirection), sibling UI elements
can act as columns instead.

When applied, a UITableLayout will take control of sibling and cell elements'
[`GuiObject.Size`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Size) and [`GuiObject.Position`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Position). Changing these in the
Properties window is still possible will not produce any effect.

Dimensions of the cells in the resulting table are controlled by the parent UI
element's dimensions. Unless [`UITableLayout.FillEmptySpaceColumns`](https://create.roblox.com/docs/reference/engine/classes/UITableLayout#FillEmptySpaceColumns) or
[`UITableLayout.FillEmptySpaceRows`](https://create.roblox.com/docs/reference/engine/classes/UITableLayout#FillEmptySpaceRows) is enabled, the cell dimensions will
be that of the parent UI element (and thus tables with more than one cell
extend outside of their parent).

Cells will continue to respect [`UISizeConstraint`](https://create.roblox.com/docs/reference/engine/classes/UISizeConstraint) objects within them.
In other words, setting [`UISizeConstraint.MinSize`](https://create.roblox.com/docs/reference/engine/classes/UISizeConstraint#MinSize) on
[`UISizeConstraint`](https://create.roblox.com/docs/reference/engine/classes/UISizeConstraint)s within the header cells can determine the size of
the rest of the cells. If [`UISizeConstraint.MaxSize`](https://create.roblox.com/docs/reference/engine/classes/UISizeConstraint#MaxSize) restricts a cell's
size from filling the allotted space (i.e. another row/column is wider than
it), it will align to the top-left.