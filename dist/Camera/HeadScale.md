HeadScale is the scale of the user's perspective of the world when using
VR.

The size of a stud in VR is:

*1 stud = 0.3 meters / HeadScale*

This means the larger the HeadScale value, the smaller the world will look
from the user's perspective when using VR devices and vice versa. For
example, a part that is 1 stud tall appears to be 0.6 meters tall to a VR
player with a HeadScale = 0.5.

This property is automatically controlled by
[`VRService.AutomaticScaling`](https://create.roblox.com/docs/reference/engine/classes/VRService#AutomaticScaling) to align the player's perspective with
the size of their avatar. If you intend to control HeadScale yourself or
use custom characters, toggle [`VRService.AutomaticScaling`](https://create.roblox.com/docs/reference/engine/classes/VRService#AutomaticScaling) =
`Enum.VRScaling.Off`.

When not using VR, this property has no effect.

This property should not be confused with [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) HeadScale,
which is a [`NumberValue`](https://create.roblox.com/docs/reference/engine/classes/NumberValue) parented to a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) to control
its scaling.

See also:

The following are also useful when developing for VR:

- [`VRService.AutomaticScaling`](https://create.roblox.com/docs/reference/engine/classes/VRService#AutomaticScaling)
- [`Camera:GetRenderCFrame()`](https://create.roblox.com/docs/reference/engine/classes/Camera#GetRenderCFrame)