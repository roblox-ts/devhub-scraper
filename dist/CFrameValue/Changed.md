Fired whenever the [`CFrameValue.Value`](https://create.roblox.com/docs/reference/engine/classes/CFrameValue#Value) of the [`CFrameValue`](https://create.roblox.com/docs/reference/engine/classes/CFrameValue) is
changed. It will run with the new value being stored in the argument
object, instead of a string representing the property being changed.

This event, like other changed events, can be used to track when an
CFrameValue changes and to track the different values that it may change
to.

For instance, this even may be useful in games that rely on CFrameValues
to track game object [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) positions and movements.

Equivalent changed events exist for similar objects, such as
[`NumberValue`](https://create.roblox.com/docs/reference/engine/classes/NumberValue) and [`StringValue`](https://create.roblox.com/docs/reference/engine/classes/StringValue), depending on what object type
best suits the need.