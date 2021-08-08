This property determines where the pivot of a [Model](https://developer.roblox.com/en-us/api-reference/class/Model) which does **not** have a set [Model.PrimaryPart](https://developer.roblox.com/en-us/api-reference/property/Model/PrimaryPart) is located. If the [Model](https://developer.roblox.com/en-us/api-reference/class/Model) **does** have a [PrimaryPart](https://developer.roblox.com/en-us/api-reference/property/Model/PrimaryPart), the pivot of the [Model](https://developer.roblox.com/en-us/api-reference/class/Model) is equal to the pivot of that primary part instead, and this [WorldPivot](https://developer.roblox.com/en-us/api-reference/property/Model/WorldPivot) property is ignored.

For a newly created [Model](https://developer.roblox.com/en-us/api-reference/class/Model), its pivot will be treated as the center of the bounding box of its contents until the **first time** its [Model.WorldPivot](https://developer.roblox.com/en-us/api-reference/property/Model/WorldPivot) property is set. Once the world pivot is set for the first time, it is impossible to restore this initial behavior.

Most commonly, moving the model with the Studio tools, or with a model movement function such as [PVInstance:PivotTo](https://developer.roblox.com/en-us/api-reference/function/PVInstance/PivotTo), [Model:MoveTo](https://developer.roblox.com/en-us/api-reference/function/Model/MoveTo), and [Model:SetPrimaryPartCFrame](https://developer.roblox.com/en-us/api-reference/function/Model/SetPrimaryPartCFrame) will set the world pivot and thus end this new model behavior.

The purpose of this behavior is to allow Lua code to get a sensible pivot simply by creating a new model and parenting objects to it, avoiding the need to explicitly set [Model.WorldPivot](https://developer.roblox.com/en-us/api-reference/property/Model/WorldPivot) every time you create a model in code.

local model = Instance.new("Model")
workspace.BluePart.Parent = model
workspace.RedPart.Parent = model
model.Parent = workspace

print(model:GetPivot())  -- Currently equal to the center of the bounding box containing "BluePart" and "RedPart"

model:PivotTo(CFrame.new(0, 10, 0)  -- This works without needing to explicitly set "model.WorldPivot"