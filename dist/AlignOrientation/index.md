An AlignOrientation attempts to constrain its
[Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0)'s orientation to the goal orientation,
which is determined by [Attachment1](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) or
[CFrame](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#CFrame) depending on the
[Mode](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#Mode).

![AlignOrientation Demo][1]

By default, this constraint only applies torque on
[Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0)'s parent, although it can be configured
to apply torque on both attachments. This torque can be limited to a max
amount via [AlignOrientation.MaxTorque](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#MaxTorque).

Any torque created by AlignOrientation will be applied about the center of
mass of the parent of the attachments (or the center of mass of parts rigidly
connected to the parents). Also note that if this constraint attaches one part
(**A**) to another part (**B**) that is anchored or connected to an anchored
part (**Z**), part **A** will not be locally simulated when interacting with a
player.

## Primary axis

The behavior of an AlignOrientation is determined by its
[AlignOrientation.PrimaryAxisOnly](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#PrimaryAxisOnly) property. By default this value is false
and an AlignOrientation will work so that the orientation of its Attachment0
exactly matches the orientation of its goal. It will apply torque about all 3
axes to achieve this goal.

If PrimaryAxisOnly is set to true, then the AlignOrientation will only apply
torque if the primary axis of its Attachment0 becomes unaligned with the goal.
This means that any rotation about the Attachment0's primary axis will not
create a torque.

## Torque magnitude

The torque used to constrain an AlignOrientation can either be configured or
set to the maximum that constraints allow. Whether the torque is configurable
is determined by the [AlignOrientation.RigidityEnabled](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#RigidityEnabled) property.

When RigidityEnabled is true, the physics solver reacts as quickly as possible
to complete the alignment. This is the same scale of force used to align other
constraints, such as prismatics when their attachments are misaligned.

When RigidityEnabled is false, then the force will be determined by the
MaxTorque, MaxAngularVelocity, and Responsiveness. MaxForce and MaxVelocity
are caps to the torque and angular velocity respectively. The actual scale of
the torque is determined by the Responsiveness. The mechanism for
responsiveness is a little complicated, but put simply the higher the
responsiveness, the quicker the constraint will try to reach its goal.

## Reaction Torque

AlignOrientations by default only apply a torque on Attachment0's parent Part.
The parent Part of Attachment1 remains unaffected. However, a torque can also
be applied to Attachment1 by enabling the
[AlignOrientation.ReactionTorqueEnabled](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#ReactionTorqueEnabled). This will cause a torque to be
applied to both Attachment0 and Attachment1 in equal and opposite directions.

See also:

- [Body Movers Example.rbxl][2], a sample place showcasing body movers in
  various configurations.
- [Attachments and Constraints][3], an article outlining how to create and use
  attachments and constraints

[1]: https://prod.docsiteassets.roblox.com/assets/blt69a26db492586631/AlignOrientationDemo.gif
[2]:
  https://doy2mn9upadnk.cloudfront.net/uploads/default/original/3X/e/1/e17a844750802035b24f68ddcbd83f6312b8f1d6.rbxl
[3]: https://developer.roblox.com/articles/Constraints