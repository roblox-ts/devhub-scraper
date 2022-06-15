This function returns an array of [Accessories](https://developer.roblox.com/en-us/api-reference/class/Accessory) that the [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) parent is currently wearing. All [Accessory](https://developer.roblox.com/en-us/api-reference/class/Accessory) objects parented to the [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) parent will be included, regardless of if they are attached or not. If the humanoid is not wearing any accessories, the array will be empty.

If the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) has no [Accessories](https://developer.roblox.com/en-us/api-reference/class/Accessory) an empty array will be returned

See also
--------

*   Use [Humanoid:AddAccessory](https://developer.roblox.com/en-us/api-reference/function/Humanoid/AddAccessory) to attach an [Accessory](https://developer.roblox.com/en-us/api-reference/class/Accessory) to a [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) parent