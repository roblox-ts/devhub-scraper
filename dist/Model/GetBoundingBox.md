This function returns a description of a volume that contains all
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) children within a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model). The volume's orientation
is based on the orientation of the [`PrimaryPart`](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart),
and matches the selection box rendered in Studio when the model is
selected. The description is provided in the form of a [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame)
**orientation** and [`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) **size**.

Mirroring the behavior of [`Terrain:FillBlock()`](https://create.roblox.com/docs/reference/engine/classes/Terrain#FillBlock), it returns a CFrame
representing the center of that bounding box and a Vector3 representing
its size.

If there is no PrimaryPart for the model, the BoundingBox will be aligned
to the world axes.
#### Example

Pictured below is a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) with a pink semitransparent [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part)
whose [`CFrame`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CFrame) and [`Size`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size) have
been set to the return values of this function called on the model.

![A model of an Observation Tower with a pink semitransparent part representing the volume returned by GetBoundingBox](https://prod.docsiteassets.roblox.com/assets/legacy/Model-GetBoundingBox.png)
#### Usage
```lua
local model = workspace.Model
local part = workspace.Part
local orientation, size = model:GetBoundingBox()
part.Size = size
part.CFrame = orientation
```