An AlignPosition attempts to constrain its
[Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0)'s position to the goal position, which is
determined by [Attachment1](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) or
[Position](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#Position) depending on the [Mode](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#Mode).

![AlignPosition Demo][1]

If this constraint attaches one part (**A**) to another part (**B**) that is
anchored or connected to an anchored part (**Z**), part **A** will not be
locally simulated when interacting with a player.

## Reaction force

AlignPositions by default only apply a force on Attachment0's parent Part. The
parent Part of [Attachment1](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) remains unaffected.
However, a force can also be applied to Attachment1 by enabling the
[AlignPosition.ReactionForceEnabled](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#ReactionForceEnabled). This will cause a force to be applied to
both Attachment0 and Attachment1 in the direction of each other.

## Force location

By default the force created by an AlignPosition is applied to the parent Part
of Attachment0 at the Attachment's location. The direction of the force is
always towards the goal. This means that if the center of mass of the Part is
not aligned with the direction of the force, a torque will be applied to the
part as well as a force.

AlignPositions' behaviors can be changed with the
[AlignPosition.ApplyAtCenterOfMass](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#ApplyAtCenterOfMass) property. When enabled, the AlignPosition
will check if other Parts are rigidly connected to the parent Part of
Attachment0. If there are, then the force will be applied at the center of
mass of those connected parts. If not, then the force will be applied at the
center of mass of the parent part itself.

## Force magnitude

The force used to constrain an AlignPosition can either be configured or set
to the maximum that constraints allow. Whether the force is configurable is
determined by the [AlignPosition.RigidityEnabled](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#RigidityEnabled) property.

When RigidityEnabled is true, the physics solver reacts as quickly as possible
to complete the alignment. This is the same scale of force used to connect
other constraints, such as hinges when their attachments are separated.

When RigidityEnabled is false, then the force will be determined by the
[AlignPosition.MaxForce](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#MaxForce), [AlignPosition.MaxVelocity](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#MaxVelocity), and
[AlignPosition.Responsiveness](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#Responsiveness). MaxForce and MaxVelocity are caps to the force
and velocities respectively. The actual scale of the force is determined by
the Responsiveness. The mechanism for responsiveness is a little complicated,
but put simply the higher the responsiveness, the quicker the constraint will
try to reach its goal.

See also:

- [Body Movers Example.rbxl][2], a sample place showcasing body movers in
  various configurations.
- [Attachments and Constraints][3], an article outlining how to create and use
  attachments and constraints

[1]: https://prod.docsiteassets.roblox.com/assets/bltf994f657b0e97add/AlignPositionDemo.gif
[2]:
  https://doy2mn9upadnk.cloudfront.net/uploads/default/original/3X/e/1/e17a844750802035b24f68ddcbd83f6312b8f1d6.rbxl
[3]: https://developer.roblox.com/articles/Constraints