You can control how much a given control affects the character pose by
using this property. Values should be in the [0, 1] range. 0 means no
effect, and 1 means full effect of the IK control. Values outside this
range are truncated. Smoothly varying this value allows you to blend in or
out a specific control to avoid jarring motion. It is 1 by default.

The weight determines the interpolation factor between the End-Effector
and the IK target. Setting the weight to 0 doesn't disable the IK Control
because other factors, including the SmoothTime smoothing factor and Pole,
can still change the pose. To truly disable the IK Control, turn the
[`Enabled`](https://create.roblox.com/docs/reference/engine/classes/IKControl#Enabled) property to false.