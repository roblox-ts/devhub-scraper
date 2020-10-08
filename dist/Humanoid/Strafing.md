This event does not fire when the \`Humanoid\` is strafing and should not be used by developers

This event is fired when the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) enters or leaves the _StrafingNoPhysics_ [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType).

When the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) enters the _StrafingNoPhysics_ state this event will fire with an _active_ parameter of _true_. The event will fire again with _active_ equal to _false_ when the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) leaves the _StrafingNoPhysics_ state.

This event is associated with the _StrafingNoPhysics_ [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) state and does **not** fire when the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is moving perpendicular to the direction it is facing. This state is currently unused, if it is set using [Humanoid:ChangeState](https://developer.roblox.com/en-us/api-reference/function/Humanoid/ChangeState) the state will revert to _RunningNoPhysics_.