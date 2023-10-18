Determines the texture of the [`Pants`](https://create.roblox.com/docs/reference/engine/classes/Pants). The content ID link pointing
to the pants template hosted on the Roblox website.
#### How do I find the PantsTemplate?

This content ID is different to the website URL of the pants. The content
ID can be found by pasting the website URL of the pants into the
PantsTemplate property in Roblox Studio, as studio will correct it.
Alternatively [`InsertService:LoadAsset()`](https://create.roblox.com/docs/reference/engine/classes/InsertService#LoadAsset) can be used to insert the
pants into the workspace, for example:
```lua
local webURL = "https://www.roblox.com/catalog/1804739/Jeans"
local assetId = tonumber(string.match(webURL, "%d+") or 0) -- extract the number
local success, model = pcall(function()
	return game:GetService("InsertService"):LoadAsset(assetId)
end)
if success then
	model.Parent = workspace
end
```

For a [`Shirt`](https://create.roblox.com/docs/reference/engine/classes/Shirt) object's template, see [`Shirt.ShirtTemplate`](https://create.roblox.com/docs/reference/engine/classes/Shirt#ShirtTemplate).