Attributes are not currently enabled, so this API member may have no effect, emit a warning or raise an error. Do not use it in new work.

This function returns an event that behaves exactly like the `Changed` event, except that the event only fires when the given attribute changes. It's generally a good idea to use this method instead of a connection to Changed with a function that checks the attribute name. Subsequent calls to this method on the same object with the same attribute name return the same event.

It is similar to [Instance:GetPropertyChangedSignal](https://developer.roblox.com/en-us/api-reference/function/Instance/GetPropertyChangedSignal) but for attributes.

For example, the following code snippet will return a signal that fires the function `attributeChanged` when the instance's `InitialPosition` attribute changes. Note that this code sample does not define `instance`:

```lua
local function attributeChanged()
    print(“Attribute changed”)
end

instance:GetAttributeChangedSignal("InitialPosition"):Connect(attributeChanged)
```

Behavior
--------

### Serialization

Attributes are serialized when an instance is saved to a file. This means that they will persist between studio sessions and can be assigned a value before a place is running.

### Replication

Attributes are replicated, respecting filtering rules, from server to client. If the server changes an attribute, the clients value will also change. If the client changes the value however, it will not be changed on the server.

### Supported Types

*   Basic Lua primitives: string, number, bool, nil
*   Roblox atomic types: Vector3, UDim2, NumberSequence, etc…
*   Advanced types: Instance reference, table.

See also
--------

*   [Instance:SetAttribute](https://developer.roblox.com/en-us/api-reference/function/Instance/SetAttribute), sets the attribute with the given name to the given value
*   [Instance:GetAttribute](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttribute), returns the attribute which has been assigned to the given name
*   [Instance:GetAttributes](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttributes), returns a dictionary of string → variant pairs for each of the instance's attributes
*   [Instance.AttributeChanged](https://developer.roblox.com/en-us/api-reference/event/Instance/AttributeChanged), fires whenever an attribute is changed on the instance