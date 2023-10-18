The AddAccessory function attaches the specified [`Accessory`](https://create.roblox.com/docs/reference/engine/classes/Accessory) to the
[`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) parent.
#### How are Accessories attached to Humanoids?

When this function is called, the [`Accessory`](https://create.roblox.com/docs/reference/engine/classes/Accessory) is parented to the
[`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) parent and then attached.

An [`Accessory`](https://create.roblox.com/docs/reference/engine/classes/Accessory) is attached to the character by searching for an
[`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) in the [`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) parent that shares
the same name as an [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) in the accessory's *Handle*
[`Part`](https://create.roblox.com/docs/reference/engine/classes/Part). If one is found, the *Handle* part will be connected to the
parent of the [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) using a [`Weld`](https://create.roblox.com/docs/reference/engine/classes/Weld). This weld will be
configured so the [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment) occupy the same space.

If the required [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment) can not be found, then the
[`Accessory`](https://create.roblox.com/docs/reference/engine/classes/Accessory) will remain parented to the [`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
parent but it will be unattached.

Typically accessory welds are created on the server. Under certain
circumstances, they can be created on the client. In these situations,
client-sided calls to [`Humanoid.AddAccessory`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#AddAccessory) may not always produce
the desired behavior and you can use
[`Humanoid.BuildRigFromAttachments`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#BuildRigFromAttachments) to force the expected weld
creation.