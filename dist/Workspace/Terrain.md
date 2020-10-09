This property is a reference to the [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) object parented to the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace).

![An example of Roblox terrain](https://developer.roblox.com/assets/blt53fef90aa44799da/Terrain.png)

This property, like [Workspace.CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera), ensures that developers to not inadvertently index a descendant of [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) named 'Terrain' when looking for a game's [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) object. Without this property, developers would need to use the [Instance:FindFirstChildOfClass](https://developer.roblox.com/en-us/api-reference/function/Instance/FindFirstChildOfClass) function.

```lua
workspace.Terrain.WaterColor = Color3.new(0, 1, 0) -- make the water green
```