Fires when the [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)s selected in Roblox Studio changes.

Note this event does not give the new selection. Developers will need to
use [`Selection`](https://create.roblox.com/docs/reference/engine/classes/Selection)'s [`Selection:Get()`](https://create.roblox.com/docs/reference/engine/classes/Selection#Get) function to obtain the
current selection.

Although this event can be used outside of plugins and the command bar, it
only applies to the selection in Roblox Studio and therefore has no
functionality outside of Studio.

To change the selection use the [`Selection:Set()`](https://create.roblox.com/docs/reference/engine/classes/Selection#Set) function.