Sets the currently selected objects in Roblox Studio to [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)s
in the given array.

Calling this function will cause the [`Selection.SelectionChanged`](https://create.roblox.com/docs/reference/engine/classes/Selection#SelectionChanged)
event to fire, unless the new selection set is identical to the previous
selection.

Note this function overwrites the existing selection. However, using
[`Selection:Get()`](https://create.roblox.com/docs/reference/engine/classes/Selection#Get) an [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) can be added to the existing
selection like so:
```lua
local selected = Selection:Get()
table.insert(selected, object)
Selection:Set(selected)
```