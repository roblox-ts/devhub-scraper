Whether the constraint uses **one** or **two** attachments in calculating
its goal. By default, this is `Enum.PositionAlignmentMode|TwoAttachment`,
meaning that the constraint disregards
[`Position`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#Position) and attempts to move
[`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) to the position of
[`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1).

If set to `Enum.PositionAlignmentMode|OneAttachment`, the constraint
disregards [`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) and attempts to move
[`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) to
[`Position`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#Position).