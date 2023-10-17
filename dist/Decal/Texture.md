The Content ID of the image to be applied by the [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal).
#### How can I upload a Decal?

Images can be uploaded to Roblox provided they adhere to the community
guidelines. For information on how to upload images, see
[Textures and Decals](https://create.roblox.com/docs/parts/textures-decals).
#### How to find do I find a Decal's Content ID?

Unlike with [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) and [`Animation`](https://create.roblox.com/docs/reference/engine/classes/Animation) objects, the Content ID of
a Decal is not the same as the number in the URL. There are two main ways
of finding the Content ID of a Decal:

- Paste the URL into the Texture property in Roblox Studio. Roblox will
automatically update the property to the correct Content ID. Note this
only works in Roblox Studio and cannot be done from Scripts or while the
game is running.
- Insert the Decal into the game, this is generally done through the
Toolbox under 'My Decals'. The Content ID can be found in the decal that
is inserted. Note, [`InsertService:LoadAsset()`](https://create.roblox.com/docs/reference/engine/classes/InsertService#LoadAsset) can also be used if
developers wish to automate this method.