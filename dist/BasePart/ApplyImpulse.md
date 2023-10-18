This function applies an instant force impulse to this
[`part`](https://create.roblox.com/docs/reference/engine/classes/BasePart)'s assembly.

The force is applied at the assembly's
[`center of mass`](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyCenterOfMass), so the resulting
movement will only be linear.

The resulting velocity from the impulse relies on the assembly's
[`mass`](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyMass). So a higher impulse is required to
move more massive assemblies. Impulses are useful for cases where you want
a force applied instantly, such as an explosion or collision.

If the part is owned by the server, this function must be called on a
server [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script). If the part is owned by a client, this function can
be called on a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) or server [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script).