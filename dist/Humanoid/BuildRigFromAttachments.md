BuildRigFromAttachments assembles a tree of [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) joints for a
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid). Motor6D joints are required for the playback of
[`Animations`](https://create.roblox.com/docs/reference/engine/classes/Animation)

Starting from the humanoid's [`Humanoid.RootPart`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#RootPart), the function
collects all [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment)s parented in the current part, whose name
ends with "RigAttachment". It then searches for a matching attachment in
the character that shares the same name as the attachment. Using those two
attachments, a Motor6D joint is generated based on the parts associated
with the two attachments, and the [`Attachment.CFrame`](https://create.roblox.com/docs/reference/engine/classes/Attachment#CFrame)s of the
attachments.

BuildRigFromAttachments also scales the character and sets body colors.

See the provided code sample below to see how this function works.