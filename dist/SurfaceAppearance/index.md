SurfaceAppearance objects allow developers to override the appearance of a
[`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) with advanced graphics options. Most notably, a
SurfaceAppearance can apply a set of PBR textures to a mesh.

PBR is short for Physically Based Rendering, which refers to a common texture
format for defining extra physical details in games. Because this format is
widely used, it's easy to take meshes and textures made in 3rd party editing
software and import them into Roblox. It's also easy to find PBR format
content from various 3rd party stores such as
[SketchFab](https://create.roblox.com/docs/https://sketchfab.com/search?q=pbr%20object&sort_by=-relevance&type=models),
[TurboSquid](https://create.roblox.com/docs/https://www.turbosquid.com/Search/3D-Models/free/pbr),
[CGTrader](https://create.roblox.com/docs/http://cgtrader.com/pbr-3d-models?polygons=lt_5k).

For PBR textures to be visible in-game, when you change a texture property of
SurfaceAppearance you should wait until you see the "Successfully uploaded
compressed SurfaceAppearance." message in the output window. If your PBR
textures are not visible, try changing a texture property.

Here is a mesh with PBR textures
[found on Turbosquid](https://create.roblox.com/docs/https://www.turbosquid.com/3d-models/3d-model-fantasy-sword---ready/1119210)
imported into Roblox.

![TextureId vs SurfaceAppearance](https://prod.docsiteassets.roblox.com/assets/legacy/meshpart-vs-sa.png)

![Pine trees](https://prod.docsiteassets.roblox.com/assets/legacy/pinetrees.png)

SurfaceAppearance's [`AlphaMode`](https://create.roblox.com/docs/reference/engine/classes/SurfaceAppearance#AlphaMode) property can
also be to improve the look of partially transparent textures on MeshParts by
fixing various sorting issues.

How a MeshPart with a SurfaceAppearance looks to users depends on their device
and their graphics quality level. You may want to preview your content with
different quality level settings.

Note:

- Most SurfaceAppearance properties cannot be modified by scripts in-game.
This is because the Roblox engine needs to do some pre-processing to display
a SurfaceAppearance, and this is usually too expensive to perform in-game.