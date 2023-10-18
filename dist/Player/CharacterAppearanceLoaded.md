This event fires when the full appearance of a [`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character)
has been inserted.

A [`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character) generally has a range of objects modifying its
appearance, including [`Accoutrements`](https://create.roblox.com/docs/reference/engine/classes/Accoutrement),
[`Shirts`](https://create.roblox.com/docs/reference/engine/classes/Shirt), [`Pants`](https://create.roblox.com/docs/reference/engine/classes/Pants) and
[`CharacterMeshes`](https://create.roblox.com/docs/reference/engine/classes/CharacterMesh). This event will fire when all such
objects have been inserted into the [`Player.Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character).

One use for this event is to ensure all accessories have loaded before
destroying them. See below for an example of this.