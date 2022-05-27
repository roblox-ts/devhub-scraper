This property determines how the collision model of the [TriangleMeshPart](https://create.roblox.com/docs/reference/engine/classes/TriangleMeshPart)
relates to the actual geometry of the mesh. In situations where the
collision model of a mesh is unimportant or precision isn't necessary, it
is a good idea to set CollisionFidelity to 'Box' to improve performance.

This property cannot be read or manipulated by scripts during run time.

#### How CollisionFidelity Works

[CollisionFidelity](https://developer.roblox.com/en-us/api-reference/enum/CollisionFidelity) has three options, the results of which are
demonstrated in the image below.

![Collision Fidelity][1]

A visual representation of a [MeshPart](https://create.roblox.com/docs/reference/engine/classes/MeshPart)s collision model can be viewed by
enabling [PhysicsSettings.ShowDecompositionGeometry](https://create.roblox.com/docs/reference/engine/classes/PhysicsSettings#ShowDecompositionGeometry) in Roblox Studio's
Settings.

[1]: https://prod.docsiteassets.roblox.com/assets/blt3ff26427f15a0e74/CollisionFidelity.png