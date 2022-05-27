The Workspace is the service in which any objects that are to be rendered in
the 3D world exist. Objects not descending from Workspace will not be rendered
or physically interact with the world.

## What does the Workspace do?

The core job of the Workspace is to hold objects that exist in the 3D world,
[BaseParts](https://create.roblox.com/docs/reference/engine/classes/BasePart) and [Attachments](https://create.roblox.com/docs/reference/engine/classes/Attachment). Whilst such objects are
descendant of Workspace, they will be active. For BaseParts this means they
will be rendered, and physically interact with other parts and the world. For
[Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment)s this means objects adorned to them, such as
[ParticleEmitters](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter), [Beams](https://create.roblox.com/docs/reference/engine/classes/Beam) and
[BillboardGuis](https://create.roblox.com/docs/reference/engine/classes/BillboardGui) will render.

Understanding this behavior is important, as it means objects can be removed
from the Workspace when they are not needed. For example, map [Models](https://create.roblox.com/docs/reference/engine/classes/Model)
can be removed from the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace) when a different map is being played on.
Objects that are not immediately needed in the Workspace are generally stored
in [ReplicatedStorage](https://create.roblox.com/docs/reference/engine/classes/ReplicatedStorage) or [ServerStorage](https://create.roblox.com/docs/reference/engine/classes/ServerStorage).

In its role as the holder of active 3D objects, Workspace includes a number of
useful functions related to parts, their positions and joints between them.

## Accessing the Workspace

The Workspace can be accessed several ways, all of which are valid.

```
workspace -- a global variable
game.Workspace -- a property of the DataModel
game:GetService("Workspace") -- Workspace is a service
```

Note:

- Objects that require adornment, such as `ParticleEmitter`s and
  `BillboardGui`s will be adorned to the _0, 0, 0_ position when adorned to
  the Workspace (parented to it without an adornee otherwise being set)
- The `Model/MakeJoints` and `Model/BreakJoints` functions inherited from the
  `Model` class are overridden by the Workspace's own `Workspace/MakeJoints`
  and `Workspace/BreakJoints` functions, which can only be used in plugins
- It is impossible to delete the Workspace
- The Workspace will also clean up `BasePart`s that fall beneath
  `Workspace/FallenPartsDestroyHeight`
- A client's current `Camera` object can be accessed using the
  `Workspace/CurrentCamera` property
- The `Terrain` object can be accessed using the `Workspace/Terrain` property