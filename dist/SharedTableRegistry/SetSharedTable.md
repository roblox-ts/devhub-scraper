Registers the provided [`SharedTable`](https://create.roblox.com/docs/reference/engine/datatypes/SharedTable) with the specified name. If
the provided [`SharedTable`](https://create.roblox.com/docs/reference/engine/datatypes/SharedTable) is `nil`, any existing
[`SharedTable`](https://create.roblox.com/docs/reference/engine/datatypes/SharedTable) with the specified name is unregistered.
```lua
local SharedTableRegistry = game:GetService("SharedTableRegistry")

-- Register a SharedTable with the name "MyData":
local st = SharedTable.new({1, 2, 3})
SharedTableRegistry:SetSharedTable("MyData", st)

-- Unregister the SharedTable with the name "MyData":
SharedTableRegistry:SetSharedTable("MyData", nil)
```