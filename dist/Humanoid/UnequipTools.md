This function unequips any [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool) currently equipped by the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)

The unequipped [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool) will be parented to the [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack) of the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) associated with the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid).

If no [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool) is equipped, this function will do nothing.

Although [Tools](https://developer.roblox.com/en-us/api-reference/class/Tool) can be equipped by NPCs (Non Player Characters), this function only works on [Humanoids](https://developer.roblox.com/en-us/api-reference/class/Humanoid) with a corresponding [Player](https://developer.roblox.com/en-us/api-reference/class/Player). This is because a [Backpack](https://developer.roblox.com/en-us/api-reference/class/Backpack) object is required to parent the unequipped [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool) to.

See also
--------

*   To instead equip a [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool), use [Humanoid:EquipTool](https://developer.roblox.com/en-us/api-reference/function/Humanoid/EquipTool)