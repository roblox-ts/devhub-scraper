SurfaceAppearance objects allow developers to override the appearance of a
[MeshPart](https://create.roblox.com/docs/reference/engine/classes/MeshPart) with advanced graphics options. Most notably, a SurfaceAppearance
can apply a set of PBR textures to a mesh.

PBR is short for Physically Based Rendering, which refers to a common texture
format for defining extra physical details in games. Because this format is
widely used, it's easy to take meshes and textures made in 3rd party editing
software and import them into Roblox. It's also easy to find PBR format
content from various 3rd party stores such as [SketchFab][1], [TurboSquid][2],
[CGTrader][3].

For PBR textures to be visible in-game, when you change a texture property of
SurfaceAppearance you should wait until you see the "Successfully uploaded
compressed SurfaceAppearance." message in the output window. If your PBR
textures are not visible, try changing a texture property.

Here is a mesh with PBR textures [found on Turbosquid][5] imported into
Roblox.

![TextureId vs SurfaceAppearance][4]

![Pine trees][6]

SurfaceAppearance's [AlphaMode](https://create.roblox.com/docs/reference/engine/classes/SurfaceAppearance#AlphaMode) property can also
be to improve the look of partially transparent textures on MeshParts by
fixing various sorting issues.

How a MeshPart with a SurfaceAppearance looks to users depends on their device
and their graphics quality level. You may want to preview your content with
different quality level settings.

Note:

- Most SurfaceAppearance properties cannot be modified by scripts in-game.
  This is because the Roblox engine needs to do some pre-processing to display
  a SurfaceAppearance, and this is usually too expensive to perform in-game.

[1]:
  https://sketchfab.com/search?q=pbr%20object&sort_by=-relevance&type=models
[2]: https://www.turbosquid.com/Search/3D-Models/free/pbr
[3]: http://cgtrader.com/pbr-3d-models?polygons=lt_5k
[4]: https://prod.docsiteassets.roblox.com/assets/bltd50936403ef1c135/meshpart-vs-sa.png
[5]:
  https://www.turbosquid.com/3d-models/3d-model-fantasy-sword---ready/1119210
[6]: https://prod.docsiteassets.roblox.com/assets/bltab4ab6ba1c003d12/pinetrees.png