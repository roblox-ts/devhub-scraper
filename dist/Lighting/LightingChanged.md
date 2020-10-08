This event fires when a [Lighting](https://developer.roblox.com/en-us/api-reference/class/Lighting) property is changed or a [Sky](https://developer.roblox.com/en-us/api-reference/class/Sky) is added or removed from [Lighting](https://developer.roblox.com/en-us/api-reference/class/Lighting).

Although this event fires when most properties of [Lighting](https://developer.roblox.com/en-us/api-reference/class/Lighting) are changed, developers should be aware of the few exceptions:

*   Changing [Lighting.GlobalShadows](https://developer.roblox.com/en-us/api-reference/property/Lighting/GlobalShadows) will not fire this event
*   The fog properties, [Lighting.FogColor](https://developer.roblox.com/en-us/api-reference/property/Lighting/FogColor), [Lighting.FogStart](https://developer.roblox.com/en-us/api-reference/property/Lighting/FogStart) and [Lighting.FogEnd](https://developer.roblox.com/en-us/api-reference/property/Lighting/FogEnd) will not fire this event

In cases where this behavior is not desired, the [Instance.Changed](https://developer.roblox.com/en-us/api-reference/event/Instance/Changed) event or [Instance:GetPropertyChangedSignal](https://developer.roblox.com/en-us/api-reference/function/Instance/GetPropertyChangedSignal) function can be used.