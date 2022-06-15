Returns an array of currently selected [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)s in Roblox Studio.

If no [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)s are selected, the array returned be empty. This function can be used in conjunction with the [Selection.SelectionChanged](https://developer.roblox.com/en-us/api-reference/event/Selection/SelectionChanged) event to get the selection whenever it changes.

Note, this function can only be used in [Plugin](https://developer.roblox.com/en-us/api-reference/class/Plugin)s or the command line.

For changing the current selection, please see [Selection:Set](https://developer.roblox.com/en-us/api-reference/function/Selection/Set).