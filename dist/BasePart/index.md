[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) is an abstract base class for in-world objects that render
and are physically simulated while in the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace). There are several
implementations of [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), the most common being [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) and
[`MeshPart`](https://create.roblox.com/docs/reference/engine/classes/MeshPart). Others include [`WedgePart`](https://create.roblox.com/docs/reference/engine/classes/WedgePart), [`SpawnLocation`](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation), and
the singleton [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) object. Generally, when documentation refers to
a "part," most [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) implementations will work and not just
[`Part`](https://create.roblox.com/docs/reference/engine/classes/Part).

For information on how [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) are grouped into simulated
rigid bodies, see [Understanding Assemblies](https://create.roblox.com/docs/physics/assemblies).

There are many different objects that interact with [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) (other
than [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain)), including:

- Several [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) may be grouped within a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) and
moved at the same time using [`PVInstance:PivotTo()`](https://create.roblox.com/docs/reference/engine/classes/PVInstance#PivotTo). See
[Models](https://create.roblox.com/docs/parts/models).
- A [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal) applies a stretched image texture to the faces of a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), while a [`Texture`](https://create.roblox.com/docs/reference/engine/classes/Texture) applies a tiled image texture to
the faces. See [Textures and Decals](https://create.roblox.com/docs/parts/textures-decals).
- A [`SurfaceGui`](https://create.roblox.com/docs/reference/engine/classes/SurfaceGui) renders [`GuiObjects`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) on the face of a
part. See
[In-Experience UI Containers](https://create.roblox.com/docs/ui/in-experience-containers).
- [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment) can be added to a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) to specify
[`CFrames`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) relative to the part. These are often used by
physical [`Constraint`](https://create.roblox.com/docs/reference/engine/classes/Constraint) objects as outlined in
[Mechanical Constraints](https://create.roblox.com/docs/physics/mechanical-constraints) and
[Mover Constraints](https://create.roblox.com/docs/physics/mover-constraints).
- [`ParticleEmitter`](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) objects emit particles uniformly in the volume of
the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) to which they are parented. See
[Particle Emitters](https://create.roblox.com/docs/effects/particle-emitters).
- Light objects like [`PointLight`](https://create.roblox.com/docs/reference/engine/classes/PointLight) emit light from the center of a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) as illustrated in
[Light Sources](https://create.roblox.com/docs/effects/light-sources).
- If parented to a [`Tool`](https://create.roblox.com/docs/reference/engine/classes/Tool) and given the name **Handle**, a
[`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) can be held by characters. See
[In-Experience Tools](https://create.roblox.com/docs/players/tools).