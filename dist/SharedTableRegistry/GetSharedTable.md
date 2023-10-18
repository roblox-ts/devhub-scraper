Gets the registered [`SharedTable`](https://create.roblox.com/docs/reference/engine/datatypes/SharedTable) with the specified name. If no
[`SharedTable`](https://create.roblox.com/docs/reference/engine/datatypes/SharedTable) with that name exists, a new [`SharedTable`](https://create.roblox.com/docs/reference/engine/datatypes/SharedTable)
is created with that name and is returned.
```lua
local SharedTableRegistry = game:GetService("SharedTableRegistry")
local st = SharedTableRegistry:GetSharedTable("MyData")
```