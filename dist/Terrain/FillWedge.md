**FillWedge** fills a wedge-shaped volume of Terrain with the given [Material](https://developer.roblox.com/en-us/api-reference/enum/Material) and the area's CFrame and Size. The orientation of the wedge is the same as an equivalent [WedgePart](https://developer.roblox.com/en-us/api-reference/class/WedgePart).

![The results of a call to Terrain:FillWedge with CFrame (0, 50, 0), Size (20, 20, 20), and Material Asphalt](https://developer.roblox.com/assets/bltb36cd8e98c2f3f2f/Terrain.FillWedge.jpg)

In the image above, a floating chunk of Terrain was created by calling this function as in the following code. A transparent, pink part with the Front surface marked with a Motor indicates the provided CFrame and Size.

workspace.Terrain:FillWedge(CFrame.new(0, 50, 0), Vector3.new(20, 20, 20), Enum.Material.Asphalt)