This is a read-only property that describes the [Material](https://developer.roblox.com/en-us/api-reference/enum/Material) the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is currently standing on.  
It works with both regular [Parts](https://developer.roblox.com/en-us/api-reference/class/BasePart) and [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) voxels.

The code sample below demonstrates how to listen to when this property changes using [Instance:GetPropertyChangedSignal](https://developer.roblox.com/en-us/api-reference/function/Instance/GetPropertyChangedSignal). When the material the humanoid is standing on changes, it will print a message indicating the new material being stood on.

```lua
local Humanoid = route.to.humanoid

Humanoid:GetPropertyChangedSignal("FloorMaterial"):Connect(function()
    print("New value for FloorMaterial: " .. tostring(Humanoid.FloorMaterial))
end)
``` 

Caveats
-------

*   When the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is not standing on a floor, the value of this property will be set to _Air_.
    *   This occurs because Enum properties cannot have an empty value.
    *   This can cause some confusion if a part has its material is set to Air, though in practice, parts are not supposed to use that material in the first place.
*   The `Humanoid|Humanoid's` character model must be able to collide with the floor, or else it will not be detected.
    *   You cannot test if the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is swimming with this property. You should instead use the `Humanoid|Humanoid's` [Humanoid:GetState](https://developer.roblox.com/en-us/api-reference/function/Humanoid/GetState) function.