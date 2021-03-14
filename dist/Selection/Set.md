Sets the currently selected objects in Roblox Studio to [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)s in the given array.

Calling this function will cause the [Selection.SelectionChanged](https://developer.roblox.com/en-us/api-reference/event/Selection/SelectionChanged) event to fire, unless the new selection set is identical to the previous selection.

Note this function overwrites the existing selection. However, using [Selection:Get](https://developer.roblox.com/en-us/api-reference/function/Selection/Get) an [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) can be added to the existing selection like so:

local selected = Selection:Get()
table.insert(selected, object)
Selection:Set(selected)