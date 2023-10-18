This blocking function returns back a copy of the
[`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) cached [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription), which
describes its current look.

This can be used to quickly determine a player's look and to assign their
look to other players using the [`Humanoid:ApplyDescription()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescription)
function.

See also:

- [`Players:GetHumanoidDescriptionFromUserId()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetHumanoidDescriptionFromUserId), gives back a
HumanoidDescription which describes the Avatar for the passed in user
- [`Players:GetHumanoidDescriptionFromOutfitId()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetHumanoidDescriptionFromOutfitId), gives back a
HumanoidDescription whose parameters are initialized to match that of
the passed in server-side outfit asset
- [`Player:LoadCharacterWithHumanoidDescription()`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacterWithHumanoidDescription), spawns a player
with the look from the HumanoidDescription Instance passed in