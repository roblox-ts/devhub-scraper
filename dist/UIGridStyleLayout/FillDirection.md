The FillDirection property determines the axis in which UI elements are
laid out. Horizontal will arrange elements from left to right, while
Vertical will arrange from top to bottom. To reverse elements (for
instance, arrange right to left) you will need to reverse the sorting.
This can be done by negating the child UI elements'
[`GuiObject.LayoutOrder`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#LayoutOrder) values when
[`UIGridStyleLayout.SortOrder`](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout#SortOrder) is set to LayoutOrder.