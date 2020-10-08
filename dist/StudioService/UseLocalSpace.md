**UseLocalSpace** determines whether the studio movement/rotation tools will manipulate a part's [CFrame](https://developer.roblox.com/en-us/api-reference/property/BasePart/CFrame) using the local space of an object or global space. By default, this setting is toggled with Ctrl-L. Plugins can read from this property if they implement their own object movement tools.

The table below shows how movement/rotation tools change when working with parts. Notice how when UseLocalSpace is false, the movement tools align with the global axes, and when true the movement tools align with the part's local axes.

UseLocalSpace

Movement

Rotation

`true`

![](https://developer.roblox.com/assets/blt430c3ecf09c42eec/StudioService.UseLocalSpace.true.jpg)

![](https://developer.roblox.com/assets/blta4d9732d2d9d6d85/StudioService.UseLocalSpace.true.rotation.jpg)

`false`

![](https://developer.roblox.com/assets/blt8175598ca3ea1650/StudioService.UseLocalSpace.false.jpg)

![](https://developer.roblox.com/assets/bltc26cf9b88a51df6b/StudioService.UseLocalSpace.false.rotation.jpg)