The content ID link pointing to the shirt template hosted on the Roblox website. Determines the texture of the [Shirt](https://developer.roblox.com/en-us/api-reference/class/Shirt).

See also [ShirtGraphic.Graphic](https://developer.roblox.com/en-us/api-reference/property/ShirtGraphic/Graphic) for the image applied to T-shirts.

Finding the ShirtTemplate ID
----------------------------

This content ID is different than the website URL of the shirt. It can be found by pasting the website URL of the shirt into the **ShirtTemplate** property in Studio, as Studio will correct it. Alternatively [InsertService:LoadAsset](https://developer.roblox.com/en-us/api-reference/function/InsertService/LoadAsset) can be used to insert the shirt into the workspace, for example:

local webURL = "https://www.roblox.com/catalog/1804747/White-Shirt"
local assetId = tonumber(string.match(webURL, "%d+") or 0)  -- Extract the number
local success, model = pcall(function() 
	return game:GetService("InsertService"):LoadAsset(assetId) 
end)
if success then 
	model.Parent = workspace
end