The LoadCharacterAppearance [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) function places the given
instance either in the player's [`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character), head, or
[`StarterGear`](https://create.roblox.com/docs/reference/engine/classes/StarterGear) based on the instance's class.

This is useful when giving a player's character an asset from the Roblox
catalog, such as a hat or piece of gear.

It is similar to [`Player:LoadCharacter()`](https://create.roblox.com/docs/reference/engine/classes/Player#LoadCharacter), except it does not reload
the entire character instance, StarterGear, or [`PlayerGui`](https://create.roblox.com/docs/reference/engine/classes/PlayerGui).

Note:

- [`Accessories`](https://create.roblox.com/docs/reference/engine/classes/Accessory), [`Shirt`](https://create.roblox.com/docs/reference/engine/classes/Shirt)s, [`ShirtGraphic`](https://create.roblox.com/docs/reference/engine/classes/ShirtGraphic)s,
[`CharacterMesh`](https://create.roblox.com/docs/reference/engine/classes/CharacterMesh)es, `BodyColor`s, and [`Accoutrement`](https://create.roblox.com/docs/reference/engine/classes/Accoutrement)s are
parented to the player's character.
- [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal)s, [`FileMesh`](https://create.roblox.com/docs/reference/engine/classes/FileMesh)es, [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh)es,
[`BlockMesh`](https://create.roblox.com/docs/reference/engine/classes/BlockMesh)es, [`CylinderMesh`](https://create.roblox.com/docs/reference/engine/classes/CylinderMesh)es, and [`Texture`](https://create.roblox.com/docs/reference/engine/classes/Texture)s are
parented to the character's head.
- [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool)s and [`HopperBin`](https://create.roblox.com/docs/reference/engine/classes/HopperBin)s are parented to the player's
StarterGear.
- All other classes are ignored.