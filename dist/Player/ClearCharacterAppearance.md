The ClearCharacterAppearance function removes all [`Accessory`](https://create.roblox.com/docs/reference/engine/classes/Accessory),
[`Shirt`](https://create.roblox.com/docs/reference/engine/classes/Shirt), [`Pants`](https://create.roblox.com/docs/reference/engine/classes/Pants), [`CharacterMesh`](https://create.roblox.com/docs/reference/engine/classes/CharacterMesh), and
[`BodyColors`](https://create.roblox.com/docs/reference/engine/classes/BodyColors) from the given player's [`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character). In
addition, it also removes the T-Shirt [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal) on the player's torso.
The character's body part colors and face will remain unchanged. This
method does nothing if the player does not have a Character.

It does not remove [`t-shirts`](https://create.roblox.com/docs/reference/engine/classes/ShirtGraphic), head meshes, or faces.