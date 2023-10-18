This yield function makes the [`character's`](https://create.roblox.com/docs/reference/engine/classes/Player#Character)
appearance match the specification of the passed in
[`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription). A copy of the passed
[`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription) is cached as the [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription)
for the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid).

It allows you to quickly set a character's appearance and store the
specification of that appearance.

This function will always ensure the character reflects the passed in
[`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription), even if changes have been made to the
character not using the [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription) system (i.e not using
[`Humanoid:ApplyDescriptionReset()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescriptionReset) or
[`Humanoid:ApplyDescription()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescription)). This is in contrast to
[`Humanoid:ApplyDescription()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescription), which is optimized and may
incorrectly apply a [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription) if the character has been
changed by means other than through the [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription)
system.

See also:

- [`Humanoid:ApplyDescription()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescription), Makes the
[`character's`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) look match that of the passed in
[`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`Humanoid:GetAppliedDescription()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#GetAppliedDescription), returns the
HumanoidDescription currently applied to the Humanoid
- [`Players:GetHumanoidDescriptionFromUserId()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetHumanoidDescriptionFromUserId), gives back a
HumanoidDescription which describes the Avatar for the passed in user
- [`Players:GetHumanoidDescriptionFromOutfitId()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetHumanoidDescriptionFromOutfitId), gives back a
HumanoidDescription whose parameters are initialized to match that of
the passed in server-side outfit asset
- [`Player:LoadCharacterWithHumanoidDescription()`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacterWithHumanoidDescription), spawns a player
with the look from the HumanoidDescription Instance passed in