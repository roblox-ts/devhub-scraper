Forces this object to render on top of all 3d objects in the Workspace.
Even if the adornment is behind a part based on its
[HandleAdornment.CFrame](https://create.roblox.com/docs/reference/engine/classes/HandleAdornment#CFrame), if **AlwaysOnTop** is true then the adornment
will still draw on top. The one exception to this behavior is if the
[HandleAdornment.ZIndex](https://create.roblox.com/docs/reference/engine/classes/HandleAdornment#ZIndex) of the adornment is set to -1. If this is the
case, the adornment will always draw behind 3d geometry.