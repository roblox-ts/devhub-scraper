Fired whenever the [StringValue.Value](https://developer.roblox.com/en-us/api-reference/property/StringValue/Value) of the [StringValue](https://developer.roblox.com/en-us/api-reference/class/StringValue) is changed. It will run with the new value being stored in the argument object, instead of a string representing the property being changed.

This event, like other changed events, can be used to track when an StringValue changes and to track the different values that it may change to.

For instance, this may be useful in games that rely on StringValues to track values such as NPC or item names.

Note
----

Equivalent changed events exist for similar objects, such as [NumberValue](https://developer.roblox.com/en-us/api-reference/class/NumberValue) and [BoolValue](https://developer.roblox.com/en-us/api-reference/class/BoolValue), depending on what object type best suits the need.