**HumanoidDescription** is an object that stores a description a
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) for R6 and R15 rigs. It can be
[`applied`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescription) in order to set a rig's scaling,
clothing ([`Shirt`](https://create.roblox.com/docs/reference/engine/classes/Shirt), [`Pants`](https://create.roblox.com/docs/reference/engine/classes/Pants), [`ShirtGraphic`](https://create.roblox.com/docs/reference/engine/classes/ShirtGraphic)),
[`Accessories`](https://create.roblox.com/docs/reference/engine/classes/Accessory), [`Animations`](https://create.roblox.com/docs/reference/engine/classes/Animation) and
[`BodyColors`](https://create.roblox.com/docs/reference/engine/classes/BodyColors).

You can get a HumanoidDescription by using the following functions:

- [`Players:GetHumanoidDescriptionFromUserId()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetHumanoidDescriptionFromUserId), for an outfit currently
being worn by a user on Roblox.com
- [`Players:GetHumanoidDescriptionFromOutfitId()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetHumanoidDescriptionFromOutfitId), for an outfits created
by a user on Roblox.com
- You can create a Humanoid rig model from a HumanoidDescription through
[`Players:CreateHumanoidModelFromDescription()`](https://create.roblox.com/docs/reference/engine/classes/Players#CreateHumanoidModelFromDescription).

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).