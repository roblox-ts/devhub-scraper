This function causes the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) to enter the given [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType).

The humanoid state describes the activity the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is currently doing.

You should check the page for [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType) for more information on what particular states do as some have unintuitive names. For example, running describes a state where the [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) legs are on the ground, including when stationary

Due to the default behavior of the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) some states will automatically be changed when set to. For example:

*   Setting the state to _'Swimming_' when the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is not in the water will lead to it being automatically set to _'GettingUp'_
*   As it is unused, setting the state to _'PlatformStanding'_ will lead to it being automatically set to _'Running'_

See also
--------

*   To enable or disable a particular state use [Humanoid:SetStateEnabled](https://developer.roblox.com/en-us/api-reference/function/Humanoid/SetStateEnabled)
*   To get the current state use [Humanoid:GetState](https://developer.roblox.com/en-us/api-reference/function/Humanoid/GetState)