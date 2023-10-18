When Select is called on an instance selectionParent that is PlayerGui or
a descendent of PlayerGui, the engine searches all available selectable,
visible and on-screen GuiObjects that are descendents of selectionParent
and sets the [`GuiService.SelectedObject`](https://create.roblox.com/docs/reference/engine/classes/GuiService#SelectedObject) to the GuiObject with the
smallest [`GuiService.SelectionOrder`](https://create.roblox.com/docs/reference/engine/classes/GuiService#SelectionOrder).