This function returns a dictionary of string → variant pairs for each
attribute where the string is the name of the attribute and the variant is
a non-nil value.

For example, the following code snippet will print an instance's
attributes and values. Note that this code sample does not define
[`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance):
```lua
local attributes = instance:GetAttributes()
for name, value in pairs(attributes) do
    print(name .. " " .. value)
end
```

See also:

- [`Instance:SetAttribute()`](https://create.roblox.com/docs/reference/engine/classes/Instance#SetAttribute), sets the attribute with the given name
to the given value
- [`Instance:GetAttribute()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetAttribute), returns the attribute which has been
assigned to the given name
- [`Instance.AttributeChanged`](https://create.roblox.com/docs/reference/engine/classes/Instance#AttributeChanged), fires whenever an attribute is
changed on the instance
- [`Instance:GetAttributeChangedSignal()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetAttributeChangedSignal), returns an event that
fires when the given attribute changes