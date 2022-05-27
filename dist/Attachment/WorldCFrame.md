WorldCFrame describes the exact [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of this attachment in
the game world, independent of its [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) parent.

The value of this property is equivalent to multiplying the CFrame of the
[attachment's](https://create.roblox.com/docs/reference/engine/classes/Attachment) parent by its own CFrame:

```lua
local worldCFrame = attachment.CFrame
if attachment.Parent then
    worldCFrame = attachment.Parent.CFrame * worldCFrame
end
```