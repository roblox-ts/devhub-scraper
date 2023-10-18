This function sets the attribute with the given name to the given value.
If the value given is nil, then the attribute will be removed (since nil
is returned by default).

For example, the following code snippet will set the instance's
`InitialPosition` attribute to [`Vector3.new(0, 0, 0)`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3).
Note that this code sample does not define [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance):
```lua
instance:SetAttribute("InitialPosition", Vector3.new(0, 0, 0))
```
#### Limitations

Naming requirements and restrictions:

- Names must only use alphanumeric characters and underscore
- No spaces or unique symbols are allowed
- Strings must be 100 characters or less
- Names are not allowed to start with RBX unless the caller is a Roblox
core-script (reserved for Roblox)

When attempting to set an attribute to an unsupported type, an error will
be thrown.

See also:

- [`Instance:GetAttribute()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetAttribute), returns the attribute which has been
assigned to the given name
- [`Instance:GetAttributes()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetAttributes), returns a dictionary of string →
variant pairs for each of the instance's attributes
- [`Instance.AttributeChanged`](https://create.roblox.com/docs/reference/engine/classes/Instance#AttributeChanged), fires whenever an attribute is
changed on the instance
- [`Instance:GetAttributeChangedSignal()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetAttributeChangedSignal), returns an event that
fires when the given attribute changes