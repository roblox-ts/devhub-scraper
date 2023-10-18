The distance, in studs, the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)s display is offset by relative to
the [`Workspace.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera).

When ZOffset is 0, the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam) will be displayed in its standard
position between [`Beam.Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Beam#Attachment0) and [`Beam.Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Beam#Attachment1).
ZOffset can be both positive and negative.

This property can be particularly useful when using multiple
[`Beams`](https://create.roblox.com/docs/reference/engine/classes/Beam) between the same [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment)s. It can be used to
layer the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)s and avoid
[Z-fighting](https://create.roblox.com/docs/https://en.wikipedia.org/wiki/Z-fighting).