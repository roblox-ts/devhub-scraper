BasePart is an abstract base class for in-world objects that render and are
physically simulated while in the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace). There are several
implementations of BasePart, the most common is [Part](https://create.roblox.com/docs/reference/engine/classes/Part), a simple 6-face
rectangular prism. Others include [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation), [WedgePart](https://create.roblox.com/docs/reference/engine/classes/WedgePart) and the
singleton [Terrain](https://create.roblox.com/docs/reference/engine/classes/Terrain) object within the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace). Most of the time, when
documentation refers to a part, most BasePart implementations will work and
not just [Part](https://create.roblox.com/docs/reference/engine/classes/Part).

There are many different objects that interact with BasePart:

- They may be grouped within a [Model](https://create.roblox.com/docs/reference/engine/classes/Model), which allows several BasePart to be
  moved at the same time using
  [SetPrimaryPartCFrame](https://create.roblox.com/docs/reference/engine/classes/Model#SetPrimaryPartCFrame).
- A [Decal](https://create.roblox.com/docs/reference/engine/classes/Decal) applies a stretched image texture to the faces of a part, though
  the exact mapping depends on the type of part.
- A [Texture](https://create.roblox.com/docs/reference/engine/classes/Texture) applies a tiled image texture to the faces of a part much like a
  [Decal](https://create.roblox.com/docs/reference/engine/classes/Decal).
- A [SurfaceGui](https://create.roblox.com/docs/reference/engine/classes/SurfaceGui) renders [GuiObjects](https://create.roblox.com/docs/reference/engine/classes/GuiObject) on the face of a part.
- An [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) can be added to specify a CFrames relative to a parent
  BasePart. These are often used by physics [Constraint](https://create.roblox.com/docs/reference/engine/classes/Constraint) objects, such as
  [RopeConstraint](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint) and [HingeConstraint](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint).
- [ParticleEmitter](https://create.roblox.com/docs/reference/engine/classes/ParticleEmitter) emit particles uniformly in the volume of the BasePart to
  which they are parented.
- Light objects like [PointLight](https://create.roblox.com/docs/reference/engine/classes/PointLight) emit light from the center of a BasePart.
- When [played](https://create.roblox.com/docs/reference/engine/classes/Sound#Play), a [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound) parented to a BasePart will be
  physically located at the part's position.
- [BodyMover](https://create.roblox.com/docs/reference/engine/classes/BodyMover) objects like [BodyVelocity](https://create.roblox.com/docs/reference/engine/classes/BodyVelocity) exert forces on the BasePart to
  which they are parented.
- As a sibling of a [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid), they can be used as limbs of a character and
  also animated when joined using [Motor6D](https://create.roblox.com/docs/reference/engine/classes/Motor6D). If not a sibling of a [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid),
  BasePart can still be animated using an [AnimationController](https://create.roblox.com/docs/reference/engine/classes/AnimationController).
- In Studio, you can use most implementations of BaseParts with solid
  modelling.
- If parented to a [Tool](https://create.roblox.com/docs/reference/engine/classes/Tool) and given the name "Handle", a BasePart can be held
  by characters.
- You can make BasePart interactive by adding a [ClickDetector](https://create.roblox.com/docs/reference/engine/classes/ClickDetector)
- You can use a mesh like a [BlockMesh](https://create.roblox.com/docs/reference/engine/classes/BlockMesh) or [SpecialMesh](https://create.roblox.com/docs/reference/engine/classes/SpecialMesh) to change how a
  BasePart looks without change how it physically behaves.