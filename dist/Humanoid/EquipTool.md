This function makes the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) equip the given [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool).

The below example would cause a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) to equip a tool in [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) named _'Tool'_.

 ```lua
local Players = game:GetService("Players")

local player = Players:FindFirstChildOfClass(“Player”)
if player and player.Character then
    local humanoid = player.Character:FindFirstChildOfClass("Humanoid")
    if humanoid then
        local tool = workspace:FindFirstChild("Tool")
        if tool then
            humanoid:EquipTool(tool)    
        end
    end
end
``` 

When this function is called, the humanoid will automatically unequip any [Tools](https://developer.roblox.com/en-us/api-reference/class/Tool) that it currently has equipped

Although they will be equipped, [Tools](https://developer.roblox.com/en-us/api-reference/class/Tool) for which [Tool.RequiresHandle](https://developer.roblox.com/en-us/api-reference/property/Tool/RequiresHandle) is _true_ will not function if they have no handle, regardless if this function is used to equip them or not

See also
--------

*   To unequip tools, use [Humanoid:UnequipTools](https://developer.roblox.com/en-us/api-reference/function/Humanoid/UnequipTools)