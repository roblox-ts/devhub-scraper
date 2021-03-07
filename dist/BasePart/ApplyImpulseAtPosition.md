This function pplies an instant force impulse to this `BasePart|part's` assembly, at the specified position in world space.

If the position is not at the assembly's `BasePart/AssemblyCenterOfMass|center of mass`, the impulse will cause a positional and rotational movement.

The resulting velocity from the impulse relies on the assembly's [mass](https://developer.roblox.com/en-us/api-reference/property/BasePart/AssemblyMass). So a higher impulse is required to move more massive assemblies. Impulses are useful for cases where developers want a force applied instantly, such as an explosion or collision.

If the part is owned by the server, this function must be called on a server [Script](https://developer.roblox.com/en-us/api-reference/class/Script). If the part is owned by a client, this function must be called on a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).