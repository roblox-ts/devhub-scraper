A UIListLayout lays out sibling UI elements in a single row within the parent
UI element, either horizontally or vertically. Each sibling UI element retains
its original [GuiObject.Size](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Size), but its [GuiObject.Position](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Position) will be taken
under control by the UIListLayout. While under control, the Position property
of sibling UI elements will not be editable in the Properties window.

You can use the elements' [GuiObject.LayoutOrder](https://create.roblox.com/docs/reference/engine/classes/GuiObject#LayoutOrder) by changing
[UIListLayout.SortOrder](https://create.roblox.com/docs/reference/engine/classes/UIListLayout#SortOrder) to LayoutOrder. A UIListLayout will automatically
re-layout elements when elements are added/removed, or if a relevant property
changes: [GuiObject.LayoutOrder](https://create.roblox.com/docs/reference/engine/classes/GuiObject#LayoutOrder), [Instance.Name](https://create.roblox.com/docs/reference/engine/classes/Instance#Name) or [GuiObject.Size](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Size). This
can be triggered manually by calling [UIGridStyleLayout:ApplyLayout](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout#ApplyLayout), though
this is typically not necessary.

Since each property that changes how elements are laid out will re-apply the
layout, it is recommended to set the [Instance.Parent](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) property last so that
the layout is only applied once. Similarly, since adding more UI elements will
also re-apply the layout, add the UIListLayout last so it does not recalculate
positions after each element.