This property indicates [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) of the mouse's position in 3D
space. Note that [Mouse.TargetFilter](https://create.roblox.com/docs/reference/engine/classes/Mouse#TargetFilter) and its descendants will be ignored.

Developers can get obtain the position of Hit like so:

```
local position = mouse.Hit.p
```

Hit is often used by `Tool`s to fire a weapon towards the mouse in third
person.

Developers looking for the `BasePart` the mouse is pointing at should use
`Mouse/Target`.

#### How is Mouse.Hit calculated?

The position of the Hit CFrame is calculated as the point of intersection
between the mouse's internal `DataType/Ray` (an extended version of
`Mouse/UnitRay`) and an object in 3D space (such as a part).

The orientation of the Hit CFrame corresponds with the direction of the
`Mouse/UnitRay`.

```
local unitRayDirection = mouse.UnitRay.Direction
local mouseHitDirection = mouse.Hit.lookVector
-- unitRayDirection ≈ mouseHitDirection
-- the vectors are approximately equal
```

Note, the roll of the `Workspace/CurrentCamera` is not used when
calculating the orientation of the Hit `DataType/CFrame`.

The mouse's internal ray extends for 1000 studs. If the mouse is not
pointing at an object in 3D space (for example when pointing at the sky),
this property will be 1000 studs away from the `Workspace/CurrentCamera`.