WorldCFrame describes the exact [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of this attachment in the game world, independent of its [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) parent.  

The value of this property is equivalent to multiplying the CFrame of the [attachment's](https://developer.roblox.com/en-us/api-reference/class/Attachment) parent by its own CFrame:

local worldCFrame = attachment.CFrame
if attachment.Parent then
    worldCFrame = attachment.Parent.CFrame \* worldCFrame
end