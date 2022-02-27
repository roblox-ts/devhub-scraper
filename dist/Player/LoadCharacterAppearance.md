The LoadCharacterAppearance [Player](https://developer.roblox.com/en-us/api-reference/class/Player) function places the given instance either in the player's [Player.Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character), head, or [StarterGear](https://developer.roblox.com/en-us/api-reference/class/StarterGear) based on the instance's class.

This is useful when giving a player's character an asset from the Roblox catalog, such as a hat or piece of gear.

It is similar to [Player:LoadCharacter](https://developer.roblox.com/en-us/api-reference/function/Player/LoadCharacter), except it does not reload the entire character instance, StarterGear, or [PlayerGui](https://developer.roblox.com/en-us/api-reference/class/PlayerGui).

Notes
-----

*   [Accessories](https://developer.roblox.com/en-us/api-reference/class/Accessory), [Shirt](https://developer.roblox.com/en-us/api-reference/class/Shirt)s, [ShirtGraphic](https://developer.roblox.com/en-us/api-reference/class/ShirtGraphic)s, [CharacterMesh](https://developer.roblox.com/en-us/api-reference/class/CharacterMesh)es, `BodyColor`s, and [Accoutrement](https://developer.roblox.com/en-us/api-reference/class/Accoutrement)s are parented to the player's character.
*   [Decal](https://developer.roblox.com/en-us/api-reference/class/Decal)s, [FileMesh](https://developer.roblox.com/en-us/api-reference/class/FileMesh)es, [SpecialMesh](https://developer.roblox.com/en-us/api-reference/class/SpecialMesh)es, [BlockMesh](https://developer.roblox.com/en-us/api-reference/class/BlockMesh)es, [CylinderMesh](https://developer.roblox.com/en-us/api-reference/class/CylinderMesh)es, and [Texture](https://developer.roblox.com/en-us/api-reference/class/Texture)s are parented to the character's head.
*   [Tool](https://developer.roblox.com/en-us/api-reference/class/Tool)s and [HopperBin](https://developer.roblox.com/en-us/api-reference/class/HopperBin)s are parented to the player's StarterGear.
*   All other classes are ignored.