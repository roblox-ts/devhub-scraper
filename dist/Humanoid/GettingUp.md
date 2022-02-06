This event fires when the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) enters or leaves the _GettingUp_ [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType).

The _GettingUp_ [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType) is a transition state that is activated shortly after the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) enters the _FallingDown_ (3 seconds) or _Ragdoll_ (1 second) [HumanoidStateTypes](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType).

When a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) attempts to get back up, this event will first fire with an _active_ parameter of _true_ before shortly after firing again with an _active_ parameter of _false_.

See also
--------

*   To force a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) to fall over, use the [Humanoid:ChangeState](https://developer.roblox.com/en-us/api-reference/function/Humanoid/ChangeState) function to change the [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) state to _FallingDown_