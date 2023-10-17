Determines the transparency of the [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal) with 0 being completely
opaque and 1 completely transparent.

Note, [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal)s also respect the transparency of the original image
file uploaded to Roblox. This means transparency can be changed prior to
uploading to Roblox, and without the need to use the Transparency
property.

[`Decal.LocalTransparencyModifier`](https://create.roblox.com/docs/reference/engine/classes/Decal#LocalTransparencyModifier) acts as a multiplier for the
Decal's transparency and should be used when the transparency of the decal
is likely to be changed by another script, as is the case with player
Characters.

For [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s, see [`BasePart.Transparency`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Transparency).