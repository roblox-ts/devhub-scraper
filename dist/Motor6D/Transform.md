The internal CFrame that is manipulated by Animations when a Motor6D is
being animated. It is recommended to use this property for custom
animations rather than [JointInstance.C0](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C0) and [JointInstance.C1](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C1).

Transform is the transformation between the "parent" [part](https://create.roblox.com/docs/reference/engine/classes/BasePart) and
the "child" part. The "parent" part will always be the part that is more
directly connected to the JointInstance.C0. This is not affected by which
part is assigned to [JointInstance.Part0](https://create.roblox.com/docs/reference/engine/classes/JointInstance#Part0) and which is
[JointInstance.Part1](https://create.roblox.com/docs/reference/engine/classes/JointInstance#Part1). If the side the root part is on changes the
interpretation of Transform will be inverted.

Similar to a [Weld](https://create.roblox.com/docs/reference/engine/classes/Weld), an active Motor6D will rigidly hold its two parts
such that:
`PartParent.CFrame * CParent * Transform == PartChild.CFrame * Child`