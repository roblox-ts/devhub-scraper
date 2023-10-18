This function returns a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) containing the assets which the
player is wearing, excluding gear.

If you prefer a Lua table of information about these assets instead of a
model, use [`Players:GetCharacterAppearanceInfoAsync()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetCharacterAppearanceInfoAsync).

This method behaves similar to [`InsertService:LoadAsset()`](https://create.roblox.com/docs/reference/engine/classes/InsertService#LoadAsset), and is
like using [`LoadAsset`](https://create.roblox.com/docs/reference/engine/classes/InsertService#LoadAsset) on the asset
information returned by [`Players:GetCharacterAppearanceInfoAsync()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetCharacterAppearanceInfoAsync)
except faster.