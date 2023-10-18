Returns an array of currently selected [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)s in Roblox Studio.

If no [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)s are selected, the array returned be empty. This
function can be used in conjunction with the
[`Selection.SelectionChanged`](https://create.roblox.com/docs/reference/engine/classes/Selection#SelectionChanged) event to get the selection whenever it
changes.

Note, this function can only be used in [`Plugin`](https://create.roblox.com/docs/reference/engine/classes/Plugin)s or the command
line.

For changing the current selection, please see [`Selection:Set()`](https://create.roblox.com/docs/reference/engine/classes/Selection#Set).