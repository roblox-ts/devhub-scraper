This function causes the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) to walk in the given [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) _direction_.

By default, the _direction_ given is in world terms. If the _relativeToCamera_ parameter is _true_ however the _direction_ given is relative to the `Workspace/CurrentCamera|CurrentCamera's` [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame). As the negative Z direction is considered 'forwards' in Roblox, the following code would make the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) walk in the direction of the [Workspace.CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera).

humanoid:Move(Vector3.new(0, 0, -1), true)

When this function is called, the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) will move until the function is called again. However, if the default control scripts are being used this function will be overwritten when called on [Player](https://developer.roblox.com/en-us/api-reference/class/Player) [Characters](https://developer.roblox.com/en-us/api-reference/property/Player/Character). This can be avoided by either not using the default control scripts, or calling this function every frame using [RunService:BindToRenderStep](https://developer.roblox.com/en-us/api-reference/function/RunService/BindToRenderStep) (see example).

This function can be called on the server, but this should only be done when the server has [network ownership](https://developer.roblox.com/articles/Network-Ownership) of the `Humanoid|Humanoid's` assembly.

See also
--------

*   To make a[Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) walk to a point, use the [Humanoid:MoveTo](https://developer.roblox.com/en-us/api-reference/function/Humanoid/MoveTo) function
*   For [Players](https://developer.roblox.com/en-us/api-reference/class/Player) the `Player/Move|Player:Move` function exists that calls this function