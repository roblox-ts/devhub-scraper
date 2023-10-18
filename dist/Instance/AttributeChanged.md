This event fires whenever an attribute is changed on the instance. This
includes when an attribute is set to nil. The name of the attribute that
has been changed is passed to the connected function.

For example, the following code snippet will connect the
`AttributeChanged` function to fire whenever one of [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance)'s
attributes changes. Note that this code sample does not define
[`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance):
```lua
local function attributeChanged(attributeName)
    print(attributeName, "changed")
end

instance.AttributeChanged:Connect(attributeChanged)
```

See also:

- [`Instance:SetAttribute()`](https://create.roblox.com/docs/reference/engine/classes/Instance#SetAttribute), sets the attribute with the given name
to the given value
- [`Instance:GetAttribute()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetAttribute), returns the attribute which has been
assigned to the given name
- [`Instance:GetAttributes()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetAttributes), returns a dictionary of string →
variant pairs for each of the instance's attributes
- [`Instance:GetAttributeChangedSignal()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetAttributeChangedSignal), returns an event that
fires when the given attribute changes