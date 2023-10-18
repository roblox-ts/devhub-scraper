The SortOrder property determines the next UI element to be placed in a
layout. For Name, a simple alphabetic sort is used on the Name property of
the child UI elements. For LayoutOrder, a low-to-high sort is used on the
[`GuiObject.LayoutOrder`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#LayoutOrder) property of child UI elements. If two share
the same [`GuiObject.LayoutOrder`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#LayoutOrder), whichever was added sooner to the
parent object takes precedence. An easy way to reverse the sorting order
is to negate LayoutOrder.