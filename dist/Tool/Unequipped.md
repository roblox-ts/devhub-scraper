The Unequipped event fires when a player unequips a [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool) by putting in back in their [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack). This event can be used to determine when a player stops using and puts a tool away.

This event does not fire when [Tool.RequiresHandle](https://developer.roblox.com/en-us/api-reference/property/Tool/RequiresHandle) is enabled and no handle is present.

The opposite of this event, [Tool.Equipped](https://developer.roblox.com/en-us/api-reference/event/Tool/Equipped), can be used alongside this event to determine when a player takes a tool out of their backpack to use.

The example shown below will print “A tool was unequipped” each time the tool is unequipped by the player. Please note that the below example assumes that you've already defined what “Tool” is.

Tool.Unequipped:Connect(function()
    print("The tool was unequipped")
end)