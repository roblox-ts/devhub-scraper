This function returns a [Model](https://developer.roblox.com/en-us/api-reference/class/Model) containing the assets which the player is wearing, excluding gear.

If you prefer a Lua table of information about these assets instead of a model, use [Players:GetCharacterAppearanceInfoAsync](https://developer.roblox.com/en-us/api-reference/function/Players/GetCharacterAppearanceInfoAsync).

This method behaves similar to [InsertService:LoadAsset](https://developer.roblox.com/en-us/api-reference/function/InsertService/LoadAsset), and is like using [LoadAsset](https://developer.roblox.com/en-us/api-reference/function/InsertService/LoadAsset) on the asset information returned by [Players:GetCharacterAppearanceInfoAsync](https://developer.roblox.com/en-us/api-reference/function/Players/GetCharacterAppearanceInfoAsync) except faster.