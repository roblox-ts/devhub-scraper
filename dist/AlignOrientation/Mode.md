Whether the constraint uses **one** or **two** attachments in calculating
its goal. By default, this is
`Enum.OrientationAlignmentMode|TwoAttachment`, meaning that the constraint
attempts to match the orientation of
[`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) with the orientation of
[`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1), disregarding
[`CFrame`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#CFrame),
[`PrimaryAxis`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#PrimaryAxis), and
[`SecondaryAxis`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#SecondaryAxis).

If set to `Enum.OrientationAlignmentMode|OneAttachment`, the constraint
disregards [`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) and attempts to
match the orientation of [`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) with
the orientation of [`CFrame`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#CFrame), or match the
attachment's [`Axis`](https://create.roblox.com/docs/reference/engine/classes/Attachment#Axis) and
[`SecondaryAxis`](https://create.roblox.com/docs/reference/engine/classes/Attachment#SecondaryAxis) with the constraint's
[`PrimaryAxis`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#PrimaryAxis) and
[`SecondaryAxis`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#SecondaryAxis) properties
respectively.