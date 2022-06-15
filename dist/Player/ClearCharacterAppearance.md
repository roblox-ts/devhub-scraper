The ClearCharacterAppearance function removes all [Accessory](https://developer.roblox.com/en-us/api-reference/class/Accessory), [Shirt](https://developer.roblox.com/en-us/api-reference/class/Shirt), [Pants](https://developer.roblox.com/en-us/api-reference/class/Pants), [CharacterMesh](https://developer.roblox.com/en-us/api-reference/class/CharacterMesh), and [BodyColors](https://developer.roblox.com/en-us/api-reference/class/BodyColors) from the given player's [Player.Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character). In addition, it also removes the T-Shirt [Decal](https://developer.roblox.com/en-us/api-reference/class/Decal) on the player's torso. The character's body part colors and face will remain unchanged. This method does nothing if the player does not have a Character.

Note
----

It does not remove [t-shirts](https://developer.roblox.com/en-us/api-reference/class/ShirtGraphic), head meshes, or faces.