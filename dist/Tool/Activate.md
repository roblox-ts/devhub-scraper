The Activate function simulates a click on a [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool). The Tool must be equipped for this function to work.

Tools will normally trigger the [Tool.Activated](https://developer.roblox.com/en-us/api-reference/event/Tool/Activated) event when the player releases the left mouse button, while the tool is equipped.

The below code, when placed in a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript), would create a tool in the `Players/LocalPlayer|LocalPlayer's` [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack). It will simulate the tool being activated and print “Tool activated” when the player equips the tool.

local tool = Instance.new("Tool")
tool.RequiresHandle = false
tool.Parent = game.Players.LocalPlayer.Backpack

tool.Equipped:Connect(function()
	tool:Activate()
end)

function toolActivated()
    print("Tool activated")
end

tool.Activated:Connect(toolActivated)