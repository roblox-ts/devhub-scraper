The FallingDown event fires when the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) enters and leaves the _FallingDown_ [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType).

The [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) will enter the _GettingUp_ state 3 seconds after the _FallingDown_ state is enabled. When this happens this event will fire with an _active_ value of _false_, and [Humanoid.GettingUp](https://developer.roblox.com/en-us/api-reference/event/Humanoid/GettingUp) will fire with an _active_ value of _true_.