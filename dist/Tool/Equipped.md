The Equipped event fires when a player when a player takes a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool)
out of their [`Backpack`](https://create.roblox.com/docs/reference/engine/classes/Backpack) to use. This event can be used to determine
when a player stops using and puts a tool away.

This event doesn't fire when [`Tool.RequiresHandle`](https://create.roblox.com/docs/reference/engine/classes/Tool#RequiresHandle) is enabled and no
handle is present.

The opposite of this event, [`Tool.Unequipped`](https://create.roblox.com/docs/reference/engine/classes/Tool#Unequipped), can be used alongside
this event to determine unequips a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) by putting in back in
their backpack.