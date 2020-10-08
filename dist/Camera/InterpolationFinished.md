This event fires when the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) has finished interpolating using the [Camera:Interpolate](https://developer.roblox.com/en-us/api-reference/function/Camera/Interpolate) function.

This event will not fire if a tween is interrupted due to [Camera:Interpolate](https://developer.roblox.com/en-us/api-reference/function/Camera/Interpolate) being called again.

You are advised to use [TweenService](https://developer.roblox.com/en-us/api-reference/class/TweenService) to animate the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) instead, as it is more reliable and provides more options for easing styles.