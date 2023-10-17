The core job of [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) is to hold objects that exist in the 3D
world, effectively [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) and
[`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment). While such objects are descendant of
[`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace), they will be active. For [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart), this
means they will be rendered, and physically interact with other parts and the
world. For [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment), this means that objects adorned to
them, such as [`ParticleEmitters`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter), [`Beams`](https://create.roblox.com/docs/reference/engine/classes/Beam),
and [`BillboardGuis`](https://create.roblox.com/docs/reference/engine/classes/BillboardGui), will render.

Understanding this behavior is important, as it means objects can be removed
from **Workspace** when they are not needed. For example, map
[`Models`](https://create.roblox.com/docs/reference/engine/classes/Model) can be removed from the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) when a
different map is being played on. Objects that are not immediately needed in
the 3D world are generally stored in [`ReplicatedStorage`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedStorage) or
[`ServerStorage`](https://create.roblox.com/docs/reference/engine/classes/ServerStorage).

In its role as the holder of active 3D objects, [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) includes a
number of useful functions related to parts, their positions, and joints
between them.
#### Accessing the Workspace

[`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) can be accessed several ways, all of which are valid.

- `workspace`
- `game.Workspace`
- `game:GetService("Workspace")`

#### Notes

- Objects that require adornment, such as
[`ParticleEmitters`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) and
[`BillboardGuis`](https://create.roblox.com/docs/reference/engine/classes/BillboardGui), will be at the 0, 0, 0
position when parented to [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) without an adornee otherwise
being set.
- The [`Model:MakeJoints()`](https://create.roblox.com/docs/reference/engine/classes/Model#MakeJoints) and [`Model:BreakJoints()`](https://create.roblox.com/docs/reference/engine/classes/Model#BreakJoints) methods
inherited from the [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) class are overridden by
[`Workspace:MakeJoints()`](https://create.roblox.com/docs/reference/engine/classes/Workspace#MakeJoints) and [`Workspace:BreakJoints()`](https://create.roblox.com/docs/reference/engine/classes/Workspace#BreakJoints) which can
only be used in plugins.
- It is impossible to delete [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace).
- [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) automatically cleans up [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) that
fall beneath
[`FallenPartsDestroyHeight`](https://create.roblox.com/docs/reference/engine/classes/Workspace#FallenPartsDestroyHeight).
- A client's current [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) object can be accessed using the
[`Workspace.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera) property.
- The [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) object can be accessed using the
[`Workspace.Terrain`](https://create.roblox.com/docs/reference/engine/classes/Workspace#Terrain) property.