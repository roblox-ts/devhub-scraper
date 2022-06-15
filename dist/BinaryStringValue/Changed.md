Fires if the `BinaryStringValue/Value` of the [BinaryStringValue](https://developer.roblox.com/en-us/api-reference/class/BinaryStringValue) is changed by the engine.

In practice, this object is stored out of reach from normal scripts, so this event cannot be connected to. If a BinaryStringValue is created by a script, the engine will not do anything with it, so the event will never fire.

Note
----

Equivalent changed events exist for similar objects, such as [NumberValue](https://developer.roblox.com/en-us/api-reference/class/NumberValue) and [StringValue](https://developer.roblox.com/en-us/api-reference/class/StringValue), depending on what object type best suits the need.