This property determines how the collision model of the [TriangleMeshPart](https://developer.roblox.com/en-us/api-reference/class/TriangleMeshPart) relates to the actual geometry of the mesh. In situations where the collision model of a mesh is unimportant or precision isn't necessary, it is a good idea to set CollisionFidelity to 'Box' to improve performance.

This property cannot be read or manipulated by scripts during run time.

How CollisionFidelity Works
---------------------------

[CollisionFidelity](https://developer.roblox.com/en-us/api-reference/enum/CollisionFidelity) has three options, the results of which are demonstrated in the image below.

![Collision Fidelity](https://developer.roblox.com/assets/blt3ff26427f15a0e74/CollisionFidelity.png)

A visual representation of a [MeshPart](https://developer.roblox.com/en-us/api-reference/class/MeshPart)s collision model can be viewed by enabling [PhysicsSettings.ShowDecompositionGeometry](https://developer.roblox.com/en-us/api-reference/property/PhysicsSettings/ShowDecompositionGeometry) in Roblox Studio's Settings.