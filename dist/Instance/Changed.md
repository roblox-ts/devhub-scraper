The Changed event fires right after most properties change on objects. It is possible to find the present value of a changed property by using `object[property]`. To get the value of a property before it changes, you must have stored the value of the property before it changed.

If you are only interested in listening to the change of a specific property, consider using the `GetPropertyChangedSignal` method instead to get an event that only fires when a given property changes.

This event does not fire for physics-related changes, like when the `CFrame`, `Velocity`, `RotVelocity`, `Position`, `Orientation` and `CFrame` properties of a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) change due to gravity. To detect changes in these properties, consider using a physics-based event like `RunService.Stepped` or `BasePart.Touched`. A while-true-do loop can also work.

For “-Value” objects, this event behaves differently: it only fires when the `Value` property changes. See individual pages for [IntValue](https://developer.roblox.com/en-us/api-reference/class/IntValue), [StringValue](https://developer.roblox.com/en-us/api-reference/class/StringValue), etc for more information. To detect other changes in these objects, you must use `GetPropertyChangedSignal` instead.