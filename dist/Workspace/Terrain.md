This property is a reference to the [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) object parented to the
[`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace).

![An example of Roblox terrain](https://prod.docsiteassets.roblox.com/assets/legacy/Terrain.png)

This property, like [`Workspace.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera), ensures that
developers to not inadvertently index a descendant of [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace)
named 'Terrain' when looking for a game's [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) object. Without
this property, developers would need to use the
[`Instance:FindFirstChildOfClass()`](https://create.roblox.com/docs/reference/engine/classes/Instance#FindFirstChildOfClass) function.
```lua
workspace.Terrain.WaterColor = Color3.new(0, 1, 0) -- make the water green
```