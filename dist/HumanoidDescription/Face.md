**Face** determines the asset ID of the Face to be
[`applied`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ApplyDescription) to a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid). The
type of the asset ID provided **must be for a Face** type asset and not a
Decal or Image type asset.

The actual face texture is rendered using a [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal) in the Head
named "face" or "Face".

See also:

- [HumanoidDescription System](https://create.roblox.com/docs/characters/appearance#humanoiddescription),
for more information on [`HumanoidDescription`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription).
- [`GraphicTShirt`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#GraphicTShirt),
[`Shirt`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#Shirt) and
[`Pants`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#Pants), which also apply textures to a
rig
- [`Head`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#Head), which can change the mesh of the
head
- [`FaceAccessory`](https://create.roblox.com/docs/reference/engine/classes/HumanoidDescription#FaceAccessory), which can apply
one or more [`Accessory`](https://create.roblox.com/docs/reference/engine/classes/Accessory)s to the face