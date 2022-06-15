This event fires when the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) enters or leaves the _Ragdoll_ [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType).  
The [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) will enter the _GettingUp_ state 1 second after the _Ragdoll_ state is enabled. When this happens this event will fire with an _active_ value of _false_, and [Humanoid.GettingUp](https://developer.roblox.com/en-us/api-reference/event/Humanoid/GettingUp) will fire with an _active_ value of _true_.

You can disable tripping by disabling the _Ragdoll_ and _FallingDown_ states using [Humanoid:SetStateEnabled](https://developer.roblox.com/en-us/api-reference/function/Humanoid/SetStateEnabled).

See also
--------

*   [Humanoid.FallingDown](https://developer.roblox.com/en-us/api-reference/event/Humanoid/FallingDown) for the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) event connected with the _FallingDown_ state, which behaves similarly to _Ragdoll_