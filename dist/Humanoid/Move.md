This function causes the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) to walk in the given
[`Vector3`](https://create.roblox.com/docs/reference/engine/datatypes/Vector3) *direction*.

By default, the *direction* given is in world terms. If the
*relativeToCamera* parameter is *true* however the *direction* given is
relative to the [`CurrentCamera's`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera)
[`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame). As the negative Z direction is considered 'forwards' in
Roblox, the following code would make the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) walk in the
direction of the [`Workspace.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera).
```lua
humanoid:Move(Vector3.new(0, 0, -1), true)
```

When this function is called, the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will move until the
function is called again. However, if the default control scripts are
being used this function will be overwritten when called on [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)
[`Characters`](https://create.roblox.com/docs/reference/engine/classes/Player#Character). This can be avoided by either not
using the default control scripts, or calling this function every frame
using [`RunService:BindToRenderStep()`](https://create.roblox.com/docs/reference/engine/classes/RunService#BindToRenderStep) (see example).

This function can be called on the server, but this should only be done
when the server has
[network ownership](https://create.roblox.com/docs/physics/network-ownership) of the
[`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) assembly.

See also:

- To make a[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) walk to a point, use the
[`Humanoid:MoveTo()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MoveTo) function
- For [`Players`](https://create.roblox.com/docs/reference/engine/classes/Player) the [`Player:Move()`](https://create.roblox.com/docs/reference/engine/classes/Player#Move) function exists
that calls this function