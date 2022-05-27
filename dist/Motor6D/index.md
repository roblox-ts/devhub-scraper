**Motor6D** joins two [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) ([Part0](https://create.roblox.com/docs/reference/engine/classes/JointInstance#Part0) and
[Part1](https://create.roblox.com/docs/reference/engine/classes/JointInstance#Part1)) together in an animatable way. The
[Transform](https://create.roblox.com/docs/reference/engine/classes/Motor6D#Transform) property determines the offset between these
parts. This can be set manually using [RunService.Stepped](https://create.roblox.com/docs/reference/engine/classes/RunService#Stepped) or through an
[Animator](https://create.roblox.com/docs/reference/engine/classes/Animator).

Models whose parts are joined by Motor6D are usually referred to as rigs,
typically for [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid)s. There are two primary kinds of rigs for [Player](https://create.roblox.com/docs/reference/engine/classes/Player)
avatars: R6 and R15.