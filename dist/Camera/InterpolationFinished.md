This event fires when the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) has finished interpolating using
the [`Camera:Interpolate()`](https://create.roblox.com/docs/reference/engine/classes/Camera#Interpolate) function.

This event will not fire if a tween is interrupted due to
[`Camera:Interpolate()`](https://create.roblox.com/docs/reference/engine/classes/Camera#Interpolate) being called again.

You are advised to use [`TweenService`](https://create.roblox.com/docs/reference/engine/classes/TweenService) to animate the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)
instead, as it is more reliable and provides more options for easing
styles.