Attributes are not currently enabled, so this API member may have no effect, emit a warning or raise an error. Do not use it in new work.

This event fires whenever an attribute is changed on the instance. This includes when an attribute is set to nil. The name of the attribute that has been changed is passed to the connected function.

For example, the following code snippet will connect the `attributeChanged` function to fire whenever one of `instance's` attributes changes. Note that this code sample does not define `instance`:

```Lua
local function attributeChanged(attributeName)
    print(attributeName, “changed”)
end

instance.AttributeChanged:Connect(attributeChanged)
``` 

See also
--------

*   [Instance:SetAttribute](https://developer.roblox.com/en-us/api-reference/function/Instance/SetAttribute), sets the attribute with the given name to the given value
*   [Instance:GetAttribute](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttribute), returns the attribute which has been assigned to the given name
*   [Instance:GetAttributes](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttributes), returns a dictionary of string → variant pairs for each of the instance's attributes
*   [Instance:GetAttributeChangedSignal](https://developer.roblox.com/en-us/api-reference/function/Instance/GetAttributeChangedSignal), returns an event that fires when the given attribute changes