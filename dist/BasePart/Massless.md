If this property is enabled, the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) will not
contribute to the total mass or inertia of its assembly as long as it is
welded to another part that has mass.

If the part is its own root part according to
[`AssemblyRootPart`](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyRootPart), this will be ignored
for that part, and it will still contribute mass and inertia to its
assembly like a normal part. Parts that are massless should never become
an assembly root part unless all other parts in the assembly are also
massless.

This might be useful for things like optional accessories on vehicles that
you don't want to affect the handling of the car or a massless render mesh
welded to a simpler collision mesh.

See also [Understanding Assemblies](https://create.roblox.com/docs/physics/assemblies), an
article documenting what root parts are and how to use them.