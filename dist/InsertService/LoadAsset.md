The LoadAsset function fetches an asset given its ID and returns a
[`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) containing the asset. For example, to load this public
[Doge](https://create.roblox.com/docs/https://www.roblox.com/library/257489726/Doge) [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model), which
has the asset Id ***257489726***, you can use:
```lua
local assetId = 257489726
local InsertService = game:GetService("InsertService")
local model = InsertService:LoadAsset(assetId)
model.Parent = workspace
```

Calls to this function may fail if a server providing a model is having
problems. As such, it's generally a good idea to wrap calls to this
function in `pcall` to catch these kinds of errors.
```lua
local assetId = 257489726
local InsertService = game:GetService("InsertService")
local success, model = pcall(InsertService.LoadAsset, InsertService, assetId)
if success and model then
   print("Model loaded successfully")
   model.Parent = workspace
else
   print("Model failed to load!")
end
```
#### Security Check

An asset loaded by this function must be **created or owned** by either
the game creator or Roblox. Additionally, benign asset types such as
t-shirts, shirts, pants and avatar accessories are loadable from any game
as they are public.

See also:

- [`AssetService:GetBundleDetailsAsync()`](https://create.roblox.com/docs/reference/engine/classes/AssetService#GetBundleDetailsAsync), to find out which assets
are associated with a bundle.
- For plugins, see [`DataModel:GetObjects()`](https://create.roblox.com/docs/reference/engine/classes/DataModel#GetObjects)