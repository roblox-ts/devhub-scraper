**RigType** describes whether a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is utilizing the legacy
R6 character rig, or the newer R15 character rig.

The R6 rig uses 6 visible [`Parts`](https://create.roblox.com/docs/reference/engine/classes/Part) while the R15 rig uses 15
visible [`Parts`](https://create.roblox.com/docs/reference/engine/classes/Part). R15 rigs have more joints than R6 rigs, making
them much more versatile when being animated.

Note that if this property is set incorrectly, the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will
not function correctly. For example, if a R15 humanoid's **RigType** is
set to R6, the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will die as there is no [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)
called **Torso** connected to a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) called **Head**.