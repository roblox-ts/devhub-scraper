Returns the `CFrame` of the [Model](https://developer.roblox.com/en-us/api-reference/class/Model)'s [Model.PrimaryPart](https://developer.roblox.com/en-us/api-reference/property/Model/PrimaryPart).

This function is equivalent to the following.

```lua
Model.PrimaryPart.CFrame
``` 

Note this function will throw an error if no primary part exists for the [Model](https://developer.roblox.com/en-us/api-reference/class/Model). If this behavior is not desired developers can do the following, which will be equal to nil if there is no primary part.

```lua
local cFrame = Model.PrimaryPart and Model.PrimaryPart.CFrame
```