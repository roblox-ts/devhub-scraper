CreateMeshPartAsync can create a MeshPart with specified CollisionFidelity
and RenderFidelity. Because MeshPart.MeshId is read only, this is the way
of creating MeshPart with any MeshId through scripts, without having to
clone an existing MeshPart. It throws errors if creation fails.