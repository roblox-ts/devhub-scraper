![A visualization of the FloorMaterial property in action](https://developer.roblox.com/assets/blt911c31b19922748b/FloorMaterial.gif)

**FloorMaterial** is a read-only property that describes the [Material](https://developer.roblox.com/en-us/api-reference/enum/Material) the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is currently standing on.  
It works with both regular [Parts](https://developer.roblox.com/en-us/api-reference/class/BasePartr) and [Terrain](https://developer.roblox.com/en-us/api-reference/class/Terrain) voxels.

Caveats
-------

*   When the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is not standing on a floor, the value of this property will be set to _Air_.
    *   This occurs because Enum properties cannot have an empty value.
    *   This can cause some confusion if a part has its material is set to Air, though in practice, parts are not supposed to use that material in the first place.
*   The `Humanoid|Humanoid's` character model must be able to collide with the floor, or else it will not be detected.
    *   You cannot test if the [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) is swimming with this property. You should instead use the `Humanoid|Humanoid's` [Humanoid:GetState](https://developer.roblox.com/en-us/api-reference/function/Humanoid/GetState) function.