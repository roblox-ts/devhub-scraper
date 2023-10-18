Applies an instant angular force impulse to this [`part`](https://create.roblox.com/docs/reference/engine/classes/BasePart)'s
assembly, causing the assembly to spin.

The resulting angular velocity from the impulse relies on the assembly's
[`mass`](https://create.roblox.com/docs/reference/engine/classes/BasePart#AssemblyMass). So a higher impulse is required to
move more massive assemblies. Impulses are useful for cases where you want
a force applied instantly, such as an explosion or collision.

If the part is owned by the server, this function must be called on a
server [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script). If the part is owned by a client, this function can
be called on a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) or server [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script).