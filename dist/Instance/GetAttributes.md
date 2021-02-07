**Attribute Studio Beta**  

Attributes are currently released in a beta phase and may not work for every developer. For more information on the beta, and how to opt in, see `[this](https://devforum.roblox.com/t/new-studio-beta-attributes/984141)` Developer Forum post.

This function returns a dictionary of string → variant pairs for each attribute where the string is the name of the attribute and the variant is a non-nil value.

For example, the following code snippet will print an instance's attributes and values. Note that this code sample does not define `instance`:

```lua
local attributes = instance:GetAttributes
for name, value in pairs(instance:GetAttributes()) do
    print(name .. “ “ .. value)
end
``` 

See also
--------

*   [Instance:SetAttribute](https://developer.roblox.com/en-us/api-reference/function/Instance/SetAttribute), sets the attribute with the given name to the given value
*   [Instance:GetAttribute](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttribute), returns the attribute which has been assigned to the given name
*   [Instance.AttributeChanged](https://developer.roblox.com/en-us/api-reference/event/Instance/AttributeChanged), fires whenever an attribute is changed on the instance
*   [Instance:GetAttributeChangedSignal](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttributeChangedSignal), returns an event that fires when the given attribute changes