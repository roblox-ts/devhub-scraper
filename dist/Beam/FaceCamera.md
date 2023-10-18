Determines whether the [`Beam.Segments`](https://create.roblox.com/docs/reference/engine/classes/Beam#Segments) of the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) will
always face the [`Workspace.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera) regardless of its
orientation.

A [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) has no depth, and is hence a two dimensional projection
existing in three dimensional space. This means that, by default, a
[`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) is not visible from every angle.

When FaceCamera is set to true, the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) will always be orientated
towards the [`Workspace.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera).