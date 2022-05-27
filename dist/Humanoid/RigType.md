![A comparison between the R6 rig and the R15 rig][1]

RigType describes whether a [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is utilizing the legacy R6
character rig, or the new R15 character rig.

The R6 rig uses 6 visible [Parts](https://create.roblox.com/docs/reference/engine/classes/Part), while the R15 rig uses 15 visible
[Parts](https://create.roblox.com/docs/reference/engine/classes/Part).

R15 rigs have more joints than R6 rigs, making them much more versatile
when being animated.

Note:

- If this property is set incorrectly, then the [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will not
  function correctly. For example, if a R15 [Character's](https://create.roblox.com/docs/reference/engine/classes/Player#Character)
  [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) RigType is set to R6 then the [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will die as there is
  no [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) called _Torso_ connected to a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) called _Head_

[1]: https://prod.docsiteassets.roblox.com/assets/blt2fb53ef69c9e060f/R6vsR15.png