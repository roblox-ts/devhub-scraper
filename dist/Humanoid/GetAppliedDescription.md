This blocking function returns back a copy of the [Humanoid's](https://developer.roblox.com/en-us/api-reference/class/Humanoid) cached [HumanoidDescription](https://developer.roblox.com/en-us/api-reference/class/HumanoidDescription), which describes its current look.

This can be used to quickly determine a player's look and to assign their look to other players using the [Humanoid:ApplyDescription](https://developer.roblox.com/en-us/api-reference/function/Humanoid/ApplyDescription) function.

See also
--------

*   [Players:GetHumanoidDescriptionFromUserId](https://developer.roblox.com/en-us/api-reference/function/Players/GetHumanoidDescriptionFromUserId), gives back a HumanoidDescription which describes the Avatar for the passed in user
*   [Players:GetHumanoidDescriptionFromOutfitId](https://developer.roblox.com/en-us/api-reference/function/Players/GetHumanoidDescriptionFromOutfitId), gives back a HumanoidDescription whose parameters are initialized to match that of the passed in server-side outfit asset
*   [Player:LoadCharacterWithHumanoidDescription](https://developer.roblox.com/en-us/api-reference/function/Player/LoadCharacterWithHumanoidDescription), spawns a player with the look from the HumanoidDescription Instance passed in