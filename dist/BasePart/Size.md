A part's [`Size`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size) property determines its **visual**
dimensions, while [`ExtentsSize`](https://create.roblox.com/docs/reference/engine/classes/BasePart#ExtentsSize) represents the
actual size used by the physics engine, for example in
[collision detection](https://create.roblox.com/docs/workspace/collisions). The individual
dimensions (length, width, height) can be as low as 0.001 and as high
as 2048. Size dimensions below 0.05 will be **visually** represented as if
the part's dimensions are 0.05.

The size of the part determines its mass which is given by
[`BasePart:GetMass()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#GetMass). A part's [`Size`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Size) is used by
a variety of other objects:

- [`ParticleEmitter`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) to determine the area from which particles are
spawned.
- [`BlockMesh`](https://create.roblox.com/docs/reference/engine/classes/BlockMesh) to partially determine the rendered rectangular prism.
- [`SpecialMesh`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) for certain [`MeshTypes`](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh#MeshType),
to determine the size of the rendered mesh.
- [`SurfaceLight`](https://create.roblox.com/docs/reference/engine/classes/SurfaceLight) to determine the space to illuminate.