This function returns a description of a volume that contains all [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) children within a [Model](https://developer.roblox.com/en-us/api-reference/class/Model). The volume's orientation is based on the orientation of the [PrimaryPart](https://developer.roblox.com/en-us/api-reference/property/Model/PrimaryPart), and matches the selection box rendered in Studio when the model is selected. The description is provided in the form of a [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) **orientation** and [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) **size**.

Mirroring the behavior of [Terrain:FillBlock](https://developer.roblox.com/en-us/api-reference/function/Terrain/FillBlock), it returns a CFrame representing the center of that bounding box and a Vector3 representing its size.

If there is no PrimaryPart for the model, the BoundingBox will be aligned to the world axes.

Example
-------

Pictured below is a [Model](https://developer.roblox.com/en-us/api-reference/class/Model) with a pink semitransparent [Part](https://developer.roblox.com/en-us/api-reference/class/Part) whose [CFrame](https://developer.roblox.com/en-us/api-reference/property/BasePart/CFrame) and [Size](https://developer.roblox.com/en-us/api-reference/property/BasePart/Size) have been set to the return values of this function called on the model.

![A model of an Observation Tower with a pink semitransparent part representing the volume returned by GetBoundingBox](https://developer.roblox.com/assets/blta46b16b68c24f7d7/Model-GetBoundingBox.png)

Usage
-----

```Lua
local model = workspace.Model
local part = workspace.Part
local orientation, size = model:GetBoundingBox()
part.Size = size
part.CFrame = orientation
```