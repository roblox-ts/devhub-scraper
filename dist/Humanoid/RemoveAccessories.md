This function removes all [Accessories](https://developer.roblox.com/en-us/api-reference/class/Accessory) worn by the `Humanoid|Humanoid's` parent. When this function is called, all [Accessories](https://developer.roblox.com/en-us/api-reference/class/Accessory) sharing an [Instance.Parent](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) with the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) will be removed. For [Player](https://developer.roblox.com/en-us/api-reference/class/Player) [Characters](https://developer.roblox.com/en-us/api-reference/property/Player/Character) this will remove all hats and other accessories.

This function removes [Accessories](https://developer.roblox.com/en-us/api-reference/class/Accessory) by calling [Instance:Destroy](https://developer.roblox.com/en-us/api-reference/function/Instance/Destroy) on them. This means the [Parents](https://developer.roblox.com/en-us/api-reference/property/Instance/Parent) of the accessories are set to _nil_ and locked.

See also
--------

*   To attach an [Accessory](https://developer.roblox.com/en-us/api-reference/class/Accessory) use the [Humanoid:AddAccessory](https://developer.roblox.com/en-us/api-reference/function/Humanoid/AddAccessory) function
*   To get all [Accessories](https://developer.roblox.com/en-us/api-reference/class/Accessory) belonging to a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) use the [Humanoid:GetAccessories](https://developer.roblox.com/en-us/api-reference/function/Humanoid/GetAccessories) function