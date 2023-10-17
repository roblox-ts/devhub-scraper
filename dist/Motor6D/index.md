**Motor6D** joins two [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart)
([`Part0`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#Part0) and [`Part1`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#Part1))
together in an animatable way. The [`Transform`](https://create.roblox.com/docs/reference/engine/classes/Motor6D#Transform)
property determines the offset between these parts. This can be set manually
using [`RunService.Stepped`](https://create.roblox.com/docs/reference/engine/classes/RunService#Stepped) or through an [`Animator`](https://create.roblox.com/docs/reference/engine/classes/Animator).

Models whose parts are joined by [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D) are usually referred to as
**rigs**, typically for [`Humanoids`](https://create.roblox.com/docs/reference/engine/classes/Humanoid).