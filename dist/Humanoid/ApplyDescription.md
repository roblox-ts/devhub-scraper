This yield function makes the [`character's`](https://create.roblox.com/docs/reference/engine/classes/Player#Character)
appearance match the specification of the passed in
[`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription). A copy of the passed
[`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription) is cached as the [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription)
for the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid).

It allows you to quickly set a character's appearance and store the
specification of that appearance.

This function is optimized through making the assumption that only this
function is used to change the appearance of the character, and no changes
are made through other means between calls. If changes are made to the
character between calls. Then this function may not make the character
reflect the passed in [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription) accurately. If you want
to use this function in conjunction with other means of updating the
character, [`Humanoid:ApplyDescriptionReset()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescriptionReset) will always ensure the
character reflects the passed in [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).

See also:

- [`Humanoid:ApplyDescriptionReset()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescriptionReset), Makes the
[`character's`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) look match that of the passed in
[`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription) (even after external changes)
- [`Humanoid:GetAppliedDescription()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#GetAppliedDescription), returns the
HumanoidDescription currently applied to the Humanoid
- [`Players:GetHumanoidDescriptionFromUserId()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetHumanoidDescriptionFromUserId), gives back a
HumanoidDescription which describes the Avatar for the passed in user
- [`Players:GetHumanoidDescriptionFromOutfitId()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetHumanoidDescriptionFromOutfitId), gives back a
HumanoidDescription whose parameters are initialized to match that of
the passed in server-side outfit asset
- [`Player:LoadCharacterWithHumanoidDescription()`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacterWithHumanoidDescription), spawns a player
with the look from the HumanoidDescription Instance passed in