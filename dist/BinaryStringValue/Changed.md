Fires if the [`BinaryStringValue.Value`](https://create.roblox.com/docs/reference/engine/classes/BinaryStringValue#Value) of the
[`BinaryStringValue`](https://create.roblox.com/docs/reference/engine/classes/BinaryStringValue) is changed by the engine.

In practice, this object is stored out of reach from normal scripts, so
this event cannot be connected to. If a BinaryStringValue is created by a
script, the engine will not do anything with it, so the event will never
fire.

Equivalent changed events exist for similar objects, such as
[`NumberValue`](https://create.roblox.com/docs/reference/engine/classes/NumberValue) and [`StringValue`](https://create.roblox.com/docs/reference/engine/classes/StringValue), depending on what object type
best suits the need.