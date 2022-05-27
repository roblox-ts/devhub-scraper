MajorAxis determines whether sibling UI elements are treated as rows or
columns. Below, the left uses a [TableMajorAxis](https://developer.roblox.com/en-us/api-reference/enum/TableMajorAxis) of RowMajor, and the
right uses ColumnMajor.

![Row major][1]![Column major][2]

**Note: it seems that this property isn't making noticeable changes, and
rather its behavior is determined by [UIGridStyleLayout.FillDirection](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout#FillDirection)
instead.**

[1]: https://prod.docsiteassets.roblox.com/assets/bltff6ce5d154eee764/UITableLayout_Padding.png
[2]: https://prod.docsiteassets.roblox.com/assets/bltd94eef328b68fed5/UITableLayout_FillDirection.png