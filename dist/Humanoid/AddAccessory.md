The AddAccessory function attaches the specified [Accessory](https://developer.roblox.com/en-us/api-reference/class/Accessory) to the [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) parent.

How are Accessories attached to Humanoids?
------------------------------------------

When this function is called, the [Accessory](https://developer.roblox.com/en-us/api-reference/class/Accessory) is parented to the [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) parent and then attached.

An [Accessory](https://developer.roblox.com/en-us/api-reference/class/Accessory) is attached to the character by searching for an [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment) in the [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) parent that shares the same name as an [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment) in the accessory's _Handle_ [Part](https://developer.roblox.com/en-us/api-reference/class/Part). If one is found, the _Handle_ part will be connected to the parent of the [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment) using a [Weld](https://developer.roblox.com/en-us/api-reference/class/Weld). This weld will be configured so the [Attachments](https://developer.roblox.com/en-us/api-reference/class/Attachment) occupy the same space.

If the required [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment) can not be found, then the [Accessory](https://developer.roblox.com/en-us/api-reference/class/Accessory) will remain parented to the [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) parent but it will be unattached.