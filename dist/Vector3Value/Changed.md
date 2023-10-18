Fired whenever the [`Vector3Value.Value`](https://create.roblox.com/docs/reference/engine/classes/Vector3Value#Value) of the [`Vector3Value`](https://create.roblox.com/docs/reference/engine/classes/Vector3Value)
is changed. It will run with the new value being stored in the argument
object, instead of a string representing the property being changed.

This event, like other changed events, can be used to track when an
Vector3Value changes and to track the different values that it may change
to.

For instance, this may be useful in games that rely on Vector3Values to
track positions in the game world.

Equivalent changed events exist for similar objects, such as
[`NumberValue`](https://create.roblox.com/docs/reference/engine/classes/NumberValue) and [`StringValue`](https://create.roblox.com/docs/reference/engine/classes/StringValue), depending on what object type
best suits the need.