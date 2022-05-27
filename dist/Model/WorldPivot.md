This property determines where the pivot of a [Model](https://create.roblox.com/docs/reference/engine/classes/Model) which does **not**
have a set [Model.PrimaryPart](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart) is located. If the [Model](https://create.roblox.com/docs/reference/engine/classes/Model) **does** have a
[PrimaryPart](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart), the pivot of the [Model](https://create.roblox.com/docs/reference/engine/classes/Model) is equal to the
pivot of that primary part instead, and this [WorldPivot](https://create.roblox.com/docs/reference/engine/classes/Model#WorldPivot)
property is ignored.

For a newly created [Model](https://create.roblox.com/docs/reference/engine/classes/Model), its pivot will be treated as the center of
the bounding box of its contents until the **first time** its
[Model.WorldPivot](https://create.roblox.com/docs/reference/engine/classes/Model#WorldPivot) property is set. Once the world pivot is set for the
first time, it is impossible to restore this initial behavior.

Most commonly, moving the model with the Studio tools, or with a model
movement function such as [PVInstance:PivotTo](https://create.roblox.com/docs/reference/engine/classes/PVInstance#PivotTo), [Model:MoveTo](https://create.roblox.com/docs/reference/engine/classes/Model#MoveTo), and
[Model:SetPrimaryPartCFrame](https://create.roblox.com/docs/reference/engine/classes/Model#SetPrimaryPartCFrame) will set the world pivot and thus end this
new model behavior.

The purpose of this behavior is to allow Lua code to get a sensible pivot
simply by creating a new model and parenting objects to it, avoiding the
need to explicitly set [Model.WorldPivot](https://create.roblox.com/docs/reference/engine/classes/Model#WorldPivot) every time you create a model in
code.

```
local model = Instance.new("Model")
workspace.BluePart.Parent = model
workspace.RedPart.Parent = model
model.Parent = workspace

print(model:GetPivot())  -- Currently equal to the center of the bounding box containing "BluePart" and "RedPart"

model:PivotTo(CFrame.new(0, 10, 0)  -- This works without needing to explicitly set "model.WorldPivot"
```