Attributes are not currently enabled, so this API member may have no effect, emit a warning or raise an error. Do not use it in new work.

This function sets the attribute with the given name to the given value. If the value given is nil, then the attribute will be removed (since nil is returned by default).

For example, the following code snippet will set the instance's `InitialPosition` attribute to `DataType/Vector3|Vector3.new(0, 0, 0)`. Note that this code sample does not define `instance`:

```lua
instance:SetAttribute("InitialPosition", Vector3.new(0, 0, 0))
``` 

Limitations
-----------

Naming requirements and restrictions:

*   Names must only use alphanumeric characters and underscore
*   No spaces or unique symbols are allowed
*   Strings must be 100 characters or less
*   Names are not allowed to start with RBX unless the caller is a Roblox core-script (reserved for Roblox)

When attempting to set an attribute to an unsupported type, an error will be thrown.

See also
--------

*   [Instance:GetAttribute](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttribute), returns the attribute which has been assigned to the given name
*   [Instance:GetAttributes](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttributes), returns a dictionary of string → variant pairs for each of the instance's attributes
*   [Instance.AttributeChanged](https://developer.roblox.com/en-us/api-reference/event/Instance/AttributeChanged), fires whenever an attribute is changed on the instance
*   [Instance:GetAttributeChangedSignal](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttributeChangedSignal), returns an event that fires when the given attribute changes