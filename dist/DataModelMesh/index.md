The DataModelMesh is an abstract class from which mesh classes descend.

Mesh classes are objects that, when parented to [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart)s alter the
appearance of the part to that of a predefined mesh. Note, they only alter the
appearance of the part and not the physics/collision boundaries of the part.
Developers looking to apply a mesh to a part that alters the part's collision
should use [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart)s.

Note the [`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart) and [`CharacterMesh`](https://create.roblox.com/docs/reference/engine/classes/CharacterMesh) classes do not descend
from DataModelMesh.