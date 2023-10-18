This function returns the attribute which has been assigned to the given
name. If no attribute has been assigned then nil is returned.

For example, the following code snippet will set the value of the
instance's `InitialPostion` attribute. Note that this code sample does not
define [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance):
```lua
local initialPosition = instance:GetAttribute("InitialPosition")
```

See also:

- [`Instance:SetAttribute()`](https://create.roblox.com/docs/reference/engine/classes/Instance#SetAttribute), sets the attribute with the given name
to the given value
- [`Instance:GetAttributes()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetAttributes), returns a dictionary of string →
variant pairs for each of the instance's attributes
- [`Instance.AttributeChanged`](https://create.roblox.com/docs/reference/engine/classes/Instance#AttributeChanged), fires whenever an attribute is
changed on the instance
- [`Instance:GetAttributeChangedSignal()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetAttributeChangedSignal), returns an event that
fires when the given attribute changes