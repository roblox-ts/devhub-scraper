The Humanoid is a special object that gives models the functionality of a
character. It grants the model with the ability to physically walk around and
interact with various components of a Roblox level. Humanoids are always
parented inside of a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model), and the model is expected to be an
assembly of [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) and [`Motor6D`](https://create.roblox.com/docs/reference/engine/classes/Motor6D); the root part of the
assembly is expected to be named `HumanoidRootPart`. It also expects a part
named `Head` to be connected to the character's torso part, either directly or
indirectly. By default, there are two official types of character rigs
supplied by Roblox, each with their own set of rules:
## R6

- A basic character rig that uses 6 parts for limbs.
- The `Head` part must be attached to a part named `Torso`, or the Humanoid
will die immediately.
- BodyPart appearances are applied using [`CharacterMesh`](https://create.roblox.com/docs/reference/engine/classes/CharacterMesh) objects.
- Certain properties, such as [`Humanoid.LeftLeg`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#LeftLeg) and
[`Humanoid.RightLeg`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#RightLeg), only work with R6.

## R15

- More complex than R6, but also far more flexible and robust.
- Uses 15 parts for limbs.
- The `Head` part must be attached to a part named `UpperTorso` or the
Humanoid will die immediately.
- BodyPart appearances have to be assembled directly.
- Can be dynamically rescaled by using special [`NumberValue`](https://create.roblox.com/docs/reference/engine/classes/NumberValue) objects
parented inside of the Humanoid.
- The Humanoid will automatically create [`Vector3Value`](https://create.roblox.com/docs/reference/engine/classes/Vector3Value) objects named
`OriginalSize` inside of each limb.
- If a NumberValue is parented inside of the Humanoid and is named one of the
following, it will be used to control the scaling functionality:

- BodyDepthScale
- BodyHeightScale
- BodyWidthScale
- HeadScale