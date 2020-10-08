Fired whenever the [CFrameValue.Value](https://developer.roblox.com/en-us/api-reference/property/CFrameValue/Value) of the [CFrameValue](https://developer.roblox.com/en-us/api-reference/class/CFrameValue) is changed. It will run with the new value being stored in the argument object, instead of a string representing the property being changed.

This event, like other changed events, can be used to track when an CFrameValue changes and to track the different values that it may change to.

For instance, this even may be useful in games that rely on CFrameValues to track game object [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) positions and movements.

Note
----

Equivalent changed events exist for similar objects, such as [NumberValue](https://developer.roblox.com/en-us/api-reference/class/NumberValue) and [StringValue](https://developer.roblox.com/en-us/api-reference/class/StringValue), depending on what object type best suits the need.