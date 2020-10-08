This event fires when the state of the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is changed.

The humanoid state describes the activity the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is currently doing. It takes the form of a [HumanoidStateType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidStateType) value.

See also:
---------

*   To get and set the state use [Humanoid:GetState](https://developer.roblox.com/en-us/api-reference/function/Humanoid/GetState) and [Humanoid:ChangeState](https://developer.roblox.com/en-us/api-reference/function/Humanoid/ChangeState)
*   Individual states can be disabled using [Humanoid:SetStateEnabled](https://developer.roblox.com/en-us/api-reference/function/Humanoid/SetStateEnabled)
*   As there is no idle humanoid state, you should instead use the [Humanoid.Running](https://developer.roblox.com/en-us/api-reference/event/Humanoid/Running) event or listen to the `Humanoid/RootPart|RootPart's` [BasePart.Velocity](https://developer.roblox.com/en-us/api-reference/property/BasePart/Velocity) to work out when the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is standing still