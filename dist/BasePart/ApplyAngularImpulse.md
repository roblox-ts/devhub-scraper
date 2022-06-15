Applies an instant angular force impulse to this [part's](https://developer.roblox.com/en-us/api-reference/class/BasePart) assembly, causing the assembly to spin.

The resulting angular velocity from the impulse relies on the assembly's [mass](https://developer.roblox.com/en-us/api-reference/property/BasePart/AssemblyMass). So a higher impulse is required to move more massive assemblies. Impulses are useful for cases where you want a force applied instantly, such as an explosion or collision.

If the part is owned by the server, this function must be called on a server [Script](https://developer.roblox.com/en-us/api-reference/class/Script). If the part is owned by a client, this function must be called on a \`LocalScript\`\`.