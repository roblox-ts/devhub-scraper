This function has been superseded by [PVInstance:GetPivot](https://developer.roblox.com/en-us/api-reference/function/PVInstance/GetPivot) which acts as a replacement and does not change your code's behavior. Use [PVInstance:GetPivot](https://developer.roblox.com/en-us/api-reference/function/PVInstance/GetPivot) for new work and migrate your existing [Model:GetPrimaryPartCFrame](https://developer.roblox.com/en-us/api-reference/function/Model/GetPrimaryPartCFrame) calls when convenient.

Returns the `CFrame` of the [Model](https://developer.roblox.com/en-us/api-reference/class/Model)'s [Model.PrimaryPart](https://developer.roblox.com/en-us/api-reference/property/Model/PrimaryPart).

This function is equivalent to the following.

```lua
Model.PrimaryPart.CFrame
``` 

Note this function will throw an error if no primary part exists for the [Model](https://developer.roblox.com/en-us/api-reference/class/Model). If this behavior is not desired developers can do the following, which will be equal to nil if there is no primary part.

```lua
local cFrame = Model.PrimaryPart and Model.PrimaryPart.CFrame
```