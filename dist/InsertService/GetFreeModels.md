The GetFreeModels function retrieves a list of Free [`Models`](https://create.roblox.com/docs/reference/engine/classes/Model)
from the Catalog. The return type for this method is very odd, as it
returns a single table wrapped in a table.

The best way to explain it is to show a visual of the array returned:
```lua
[1] = {
	CurrentStartIndex = 1, -- This can vary depending on the page you input.
	TotalCount = 21, -- Always 21.
	Results = {
		-- All parameters here are psuedo. They can vary depending on the asset.
		[1] = {
			Name = "Asset Name",
			AssetId = 0000000,
			AssetVersionId = 0000000,
			CreatorName = "Roblox",
    		}
    		-- [2], [3], and so on... up to [21]
    	}
}
```

An example for iterating over this list has been provided at the bottom of
this page.

Additionally, if you would like to insert free [`Decals`](https://create.roblox.com/docs/reference/engine/classes/Decal), you
can use the [`InsertService:GetFreeDecals()`](https://create.roblox.com/docs/reference/engine/classes/InsertService#GetFreeDecals) function.