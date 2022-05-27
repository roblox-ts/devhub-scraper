A position calculated via the [mass](https://create.roblox.com/docs/reference/engine/classes/BasePart#Mass) and
[position](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position) of all the parts in the assembly.

If the assembly has an anchored part, that part's
[center of mass](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyCenterOfMass) will be the assemblies
center of mass, and the assembly will have infinite mass.

Knowing the center of mass can help the assembly maintain stability. A
force applied to the center of mass will not cause
[angular acceleration](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyAngularVelocity), only
[linear](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyLinearVelocity). An assembly with a low center of
mass will have a better time staying upright.