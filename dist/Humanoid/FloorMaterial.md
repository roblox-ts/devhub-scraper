This is a read-only property that describes the [Material](https://developer.roblox.com/en-us/api-reference/enum/Material) the
[Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is currently standing on. It works with both regular
[Parts](https://create.roblox.com/docs/reference/engine/classes/BasePart) and [Terrain](https://create.roblox.com/docs/reference/engine/classes/Terrain) voxels.

The code sample below demonstrates how to listen to when this property
changes using [Instance:GetPropertyChangedSignal](https://create.roblox.com/docs/reference/engine/classes/Instance#GetPropertyChangedSignal). When the material the
humanoid is standing on changes, it will print a message indicating the
new material being stood on.

```lua
local Humanoid = route.to.humanoid

Humanoid:GetPropertyChangedSignal("FloorMaterial"):Connect(function()
    print("New value for FloorMaterial: " .. tostring(Humanoid.FloorMaterial))
end)
```

#### Caveats

- When the `Humanoid` is not standing on a floor, the value of this
  property will be set to _Air_.
  - This occurs because Enum properties cannot have an empty value.
  - This can cause some confusion if a part has its material is set to
    Air, though in practice, parts are not supposed to use that material
    in the first place.
- The `Humanoid|Humanoid's` character model must be able to collide with
  the floor, or else it will not be detected.
  - You cannot test if the `Humanoid` is swimming with this property. You
    should instead use the `Humanoid|Humanoid's` `Humanoid/GetState`
    function.

[1]: https://prod.docsiteassets.roblox.com/assets/blt911c31b19922748b/FloorMaterial.gif