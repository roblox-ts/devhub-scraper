A position calculated via the [mass](https://developer.roblox.com/en-us/api-reference/property/BasePart/Mass) and [position](https://developer.roblox.com/en-us/api-reference/property/BasePart/Position) of all the parts in the assembly.

If the assembly has an anchored part, that part's `BasePart/AssemblyCenterOfMass|center of mass` will be the assemblies center of mass, and the assembly will have infinite mass.

Knowing the center of mass can help the assembly maintain stability. A force applied to the center of mass will not cause `BasePart/AssemblyAngularVelocity|angular acceleration`, only [linear](https://developer.roblox.com/en-us/api-reference/property/BasePart/AssemblyLinearVelocity). An assembly with a low center of mass will have a better time staying upright.