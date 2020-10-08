![A comparison between the R6 rig and the R15 rig](https://developer.roblox.com/assets/blt2fb53ef69c9e060f/R6vsR15.png)

RigType describes whether a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is utilizing the legacy R6 character rig, or the new R15 character rig.

The R6 rig uses 6 visible [Parts](https://developer.roblox.com/en-us/api-reference/class/Part), while the R15 rig uses 15 visible [Parts](https://developer.roblox.com/en-us/api-reference/class/Part).

R15 rigs have more joints than R6 rigs, making them much more versatile when being animated.

Notes
-----

*   If this property is set incorrectly, then the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) will not function correctly. For example, if a R15 `Player/Character|Character's` [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) RigType is set to R6 then the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) will die as there is no [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) called _Torso_ connected to a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) called _Head_