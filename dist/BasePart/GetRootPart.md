Returns the base part of an assembly. When moving an assembly of parts
using a [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame). it is important to move this base part (this
will move all other parts connected to it accordingly).

More information is available in the
[Understanding Assemblies](https://create.roblox.com/docs/physics/assemblies) article.

This function predates the `AssemblyRootPart` property. It remains
supported for backward-compatibility; you should use the
`AssemblyRootPart` property directly.