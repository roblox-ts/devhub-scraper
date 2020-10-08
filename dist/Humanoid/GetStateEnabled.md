The GetStateEnabled function returns whether a [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType) is enabled for the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid).

The humanoid state describes the activity the humanoid is currently doing.

When a particular [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType) is disabled, the humanoid can never enter that state. This is true regardless if the attempt to change state is made using [Humanoid:ChangeState](https://developer.roblox.com/en-us/api-reference/function/Humanoid/ChangeState) or Roblox internal humanoid code.

See also
--------

*   For an event that fires when a humanoid state is enabled or disabled see [Humanoid.StateEnabledChanged](https://developer.roblox.com/en-us/api-reference/event/Humanoid/StateEnabledChanged)
*   To enable or disable a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) state use [Humanoid:SetStateEnabled](https://developer.roblox.com/en-us/api-reference/function/Humanoid/SetStateEnabled)