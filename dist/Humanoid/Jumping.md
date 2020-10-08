This event fires when the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) enters and leaves the _Jumping_ [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType).

When a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) jumps this will fire with a _active_ parameter of _true_ before shortly afterwards firing again with an active parameter of _false_. This does not correspond with when a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) has landed. For that, developers should listen for the _Landed_ [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType) using [Humanoid.StateChanged](https://developer.roblox.com/en-us/api-reference/event/Humanoid/StateChanged).

The _active_ parameter of this event also corresponds with the `Humanoid|Humanoid's` [Humanoid.Jump](https://developer.roblox.com/en-us/api-reference/property/Humanoid/Jump) property.

You can disable jumping using the [Humanoid:SetStateEnabled](https://developer.roblox.com/en-us/api-reference/function/Humanoid/SetStateEnabled) function.