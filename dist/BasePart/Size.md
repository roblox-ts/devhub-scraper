The Size property determines the dimensions of a part. The individual
dimensions can go as low as 0.05 and as high as 2048 (or 2^11). The size
of the part is used in determining its mass, which is given by
[BasePart:GetMass](https://create.roblox.com/docs/reference/engine/classes/BasePart#GetMass). The [BasePart.Shape](https://create.roblox.com/docs/reference/engine/classes/BasePart#Shape) of a part can apply some
restrictions on Size - namely, a Ball must have the same 3 dimensions. A
part's Size is used by a variety of other objects:

- [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) uses Size to determine the area from which particles
  are spawned.
- [BlockMesh](https://create.roblox.com/docs/reference/engine/classes/BlockMesh) uses Size to partially determine the rendered rectangular
  prism.
- [SpecialMesh](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) uses Size for some certain [SpecialMesh.MeshType](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh#MeshType)s to
  determine the size of the rendered mesh.
- [SurfaceLight](https://create.roblox.com/docs/reference/engine/classes/SurfaceLight) uses Size to determine the space to illuminate.