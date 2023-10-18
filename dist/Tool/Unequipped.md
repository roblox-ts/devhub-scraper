The Unequipped event fires when a player unequips a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) by
putting in back in their [`Backpack`](https://create.roblox.com/docs/reference/engine/classes/Backpack). This event can be used to
determine when a player stops using and puts a tool away.

This event doesn't fire when [`Tool.RequiresHandle`](https://create.roblox.com/docs/reference/engine/classes/Tool#RequiresHandle) is enabled and no
handle is present.

The opposite of this event, [`Tool.Equipped`](https://create.roblox.com/docs/reference/engine/classes/Tool#Equipped), can be used alongside
this event to determine when a player takes a tool out of their backpack
to use.

The example shown below will print "A tool was unequipped" each time the
tool is unequipped by the player. Please note that the below example
assumes that you've already defined what "Tool" is.
```lua
Tool.Unequipped:Connect(function()
    print("The tool was unequipped")
end)
```