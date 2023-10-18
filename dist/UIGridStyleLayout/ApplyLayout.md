The ApplyLayout method forces sibling UI elements to be re-laid out in
case the sorting criteria may have changed (such as when
[`UIGridStyleLayout.SortOrder`](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout#SortOrder) is set to Custom, and the
[`UIGridStyleLayout:SetCustomSortFunction()`](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout#SetCustomSortFunction) behavior changed).
Re-layouts automatically happen when UI elements are added/removed, or
their [`Instance.Name`](https://create.roblox.com/docs/reference/engine/classes/Instance#Name) or [`GuiObject.LayoutOrder`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#LayoutOrder) change.

The manner in which sibling UI elements are laid out is dependent on the
implementation of this abstract class. In other words, a concrete class
like [`UIListLayout`](https://create.roblox.com/docs/reference/engine/classes/UIListLayout) or [`UIGridLayout`](https://create.roblox.com/docs/reference/engine/classes/UIGridLayout) is responsible for the
actual element positioning.