This is a read-only property that describes the `Enum.Material` the
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is currently standing on. It works with both regular
[`Parts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) and [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) voxels.

The code sample below demonstrates how to listen to when this property
changes using [`Instance:GetPropertyChangedSignal()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetPropertyChangedSignal). When the
material the humanoid is standing on changes, it will print a message
indicating the new material being stood on.
```lua
local Humanoid = route.to.humanoid

Humanoid:GetPropertyChangedSignal("FloorMaterial"):Connect(function()
    print("New value for FloorMaterial: " .. tostring(Humanoid.FloorMaterial))
end)
```
#### Caveats

- When the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is not standing on a floor, the value of this
property will be set to *Air*.

- This occurs because Enum properties cannot have an empty value.
- This can cause some confusion if a part has its material is set to
Air, though in practice, parts are not supposed to use that material
in the first place.

- The character model of the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) must be able to collide with
the floor, or else it will not be detected.

- You cannot test if the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is swimming with this
property. You should instead use its [`Humanoid:GetState()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#GetState)
function.