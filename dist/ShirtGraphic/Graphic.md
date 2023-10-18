The content ID link pointing to the [`ShirtGraphic`](https://create.roblox.com/docs/reference/engine/classes/ShirtGraphic) texture hosted on
the Roblox website. This property sets the texture associated with a
t-shirt.
#### Finding the ID

This content ID is different than the website URL of the t-shirt. It can
be found by pasting the website URL of the t-shirt into the **Graphic**
property of the [`ShirtGraphic`](https://create.roblox.com/docs/reference/engine/classes/ShirtGraphic) in Roblox Studio, as Studio will
correct it. Alternatively [`InsertService:LoadAsset()`](https://create.roblox.com/docs/reference/engine/classes/InsertService#LoadAsset) can be used to
insert the t-shirt into the workspace, for example:
```lua
local webURL = "https://www.roblox.com/catalog/2591161/Sword-Fight-on-the-Heights-Ring-of-Fire-T-Shirt"
local assetId = tonumber(string.match(webURL, "%d+") or 0)  -- Extract the number

local success, model = pcall(function()
	return game:GetService("InsertService"):LoadAsset(assetId)
end)

if success then
	model.Parent = workspace
end
```