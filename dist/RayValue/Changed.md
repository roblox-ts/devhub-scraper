This event fires whenever the [`RayValue.Value`](https://create.roblox.com/docs/reference/engine/classes/RayValue#Value) property is changed.
It will run with the new value being stored in the argument object,
instead of a string representing the property being changed.

This event, like other changed events, can be used to track when an
RayValue changes and to track the different values that it may change to.

Equivalent changed events exist for similar objects, such as
[`NumberValue`](https://create.roblox.com/docs/reference/engine/classes/NumberValue) and [`StringValue`](https://create.roblox.com/docs/reference/engine/classes/StringValue), depending on what object type
best suits the need.