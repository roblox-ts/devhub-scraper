This method returns an event that behaves exactly like the `Changed`
event, except that the event only fires when the given property changes.
It's generally a good idea to use this method instead of a connection to
`Changed` with a function that checks the property name. Subsequent calls
to this method on the same object with the same property name return the
same event.

`print(object:GetPropertyChangedSignal("Name") == object:GetPropertyChangedSignal("Name")) --> always true`

[`ValueBase`](https://create.roblox.com/docs/reference/engine/classes/ValueBase) objects, such as [`IntValue`](https://create.roblox.com/docs/reference/engine/classes/IntValue) and
[`StringValue`](https://create.roblox.com/docs/reference/engine/classes/StringValue), use a modified `Changed` event that fires with the
contents of the `Value` property. As such, this method provides a way to
detect changes in other properties of those objects. For example, to
detect changes in the `Name` property of an [`IntValue`](https://create.roblox.com/docs/reference/engine/classes/IntValue), use
`IntValue:GetPropertyChangedSignal("Name"):Connect(someFunc)` since the
`Changed` event of [`IntValue`](https://create.roblox.com/docs/reference/engine/classes/IntValue) objects only detect changes on the
`Value` property.