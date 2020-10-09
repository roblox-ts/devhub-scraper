If this property is enabled, the [part](https://developer.roblox.com/en-us/api-reference/class/BasePart) will not contribute to the total mass or inertia of its rigid body as long as it is [welded](https://developer.roblox.com/en-us/api-reference/class/Weld) to another part that has mass.

![Massles property in property window](https://developer.roblox.com/assets/blt6637aa711aa15ddc/Screen_Shot_2019-01-18_at_10.03.30_PM.png)

If the part is its own root part according to [BasePart:GetRootPart](https://developer.roblox.com/en-us/api-reference/function/BasePart/GetRootPart) then this will be ignored for that part, and it will still contribute mass and inertia to its rigid body like a normal part. Parts that are massless should never become an assembly root part unless all other parts in the assembly are also massless.

This might be useful for things like optional accessories on vehicles that you don't want to affect the handling of the car or a massless render mesh welded to a simpler collision mesh. For instance, to create a massless [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart), you would use the follow code:

```lua
local mesh = Instance.new("MeshPart")
mesh.Parent = game.Workspace
mesh.MeshId = "insert meshId here"
mesh.Massless = true
``` 

See also
--------

*   `article/understanding root parts|Understanding Root Parts`, an article documenting what root parts are and how to use them