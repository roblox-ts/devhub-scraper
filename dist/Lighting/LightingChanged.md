This event fires when a [`Lighting`](https://create.roblox.com/docs/reference/engine/classes/Lighting) property is changed or a
[`Sky`](https://create.roblox.com/docs/reference/engine/classes/Sky) is added or removed from [`Lighting`](https://create.roblox.com/docs/reference/engine/classes/Lighting).

Although this event fires when most properties of [`Lighting`](https://create.roblox.com/docs/reference/engine/classes/Lighting) are
changed, developers should be aware of the few exceptions:

- Changing [`Lighting.GlobalShadows`](https://create.roblox.com/docs/reference/engine/classes/Lighting#GlobalShadows) will not fire this event
- The fog properties, [`Lighting.FogColor`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogColor), [`Lighting.FogStart`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogStart)
and [`Lighting.FogEnd`](https://create.roblox.com/docs/reference/engine/classes/Lighting#FogEnd) will not fire this event

In cases where this behavior is not desired, the [`Instance.Changed`](https://create.roblox.com/docs/reference/engine/classes/Instance#Changed)
event or [`Instance:GetPropertyChangedSignal()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetPropertyChangedSignal) function can be used.