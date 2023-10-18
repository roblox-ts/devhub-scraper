**FillWedge** fills a wedge-shaped volume of Terrain with the given
[`Enum.Material`](https://create.roblox.com/docs/reference/engine/enums/Material) and the area's CFrame and Size. The orientation of the
wedge is the same as an equivalent [`WedgePart`](https://create.roblox.com/docs/reference/engine/classes/WedgePart).
![The results of a call to Terrain:FillWedge with CFrame (0, 50, 0), Size (20, 20, 20), and Material Asphalt](https://prod.docsiteassets.roblox.com/assets/legacy/Terrain.FillWedge.jpg)

In the image above, a floating chunk of Terrain was created by calling
this function as in the following code. A transparent, pink part with the
Front surface marked with a Motor indicates the provided CFrame and Size.
```lua
workspace.Terrain:FillWedge(CFrame.new(0, 50, 0), Vector3.new(20, 20, 20), Enum.Material.Asphalt)
```