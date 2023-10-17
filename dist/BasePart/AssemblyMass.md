The sum of the mass of all the [`parts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) in this part's
assembly. Parts that are [`Massless`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Massless) and are not
the assembly's root part will not contribute to the AssemblyMass.

If the assembly has an anchored part, the assembly's mass is considered
infinite. Constraints and other physical interactions between unanchored
assemblies with a large difference in mass may cause instabilities.