Determines the mode for the selection of detail levels for mesh parts. For
a good balance between performance and fidelity this should be set to
`MeshPartDetail.DistanceBased` (default), which is what the client uses.

Note that the [`MeshPart.RenderFidelity`](https://create.roblox.com/docs/reference/engine/classes/MeshPart#RenderFidelity) needs to be set to
[`Enum.RenderFidelity`](https://create.roblox.com/docs/reference/engine/enums/RenderFidelity) for this to work. If you set it to
[`Enum.RenderFidelity`](https://create.roblox.com/docs/reference/engine/enums/RenderFidelity) you will always see the higher resolution
version and the [`Enum.MeshPartDetailLevel`](https://create.roblox.com/docs/reference/engine/enums/MeshPartDetailLevel) will be ignored for that
[`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart).