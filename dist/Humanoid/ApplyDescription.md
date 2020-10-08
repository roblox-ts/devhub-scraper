This yield function makes the `Player/Character|character's` look match that of the passed in [HumanoidDescription](https://developer.roblox.com/en-us/api-reference/class/HumanoidDescription). A copy of the passed look will then be cached in the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) as the current HumanoidDescription for the Humanoid.

It allows you to quickly set and store a character's appearance using a stored look without having to set each property every time.

See also
--------

*   [Humanoid:GetAppliedDescription](https://developer.roblox.com/en-us/api-reference/function/Humanoid/GetAppliedDescription), returns the HumanoidDescription currently applied to the Humanoid
*   [Players:GetHumanoidDescriptionFromUserId](https://developer.roblox.com/en-us/api-reference/function/Players/GetHumanoidDescriptionFromUserId), gives back a HumanoidDescription which describes the Avatar for the passed in user
*   [Players:GetHumanoidDescriptionFromOutfitId](https://developer.roblox.com/en-us/api-reference/function/Players/GetHumanoidDescriptionFromOutfitId), gives back a HumanoidDescription whose parameters are initialized to match that of the passed in server-side outfit asset
*   [Player:LoadCharacterWithHumanoidDescription](https://developer.roblox.com/en-us/api-reference/function/Player/LoadCharacterWithHumanoidDescription), spawns a player with the look from the HumanoidDescription Instance passed in