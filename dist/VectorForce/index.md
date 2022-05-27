A VectorForce is used to apply a force to a part or assembly of parts. The
direction and strength of the force is determined by a [Vector3](https://developer.roblox.com/en-us/api-reference/datatype/Vector3) and
can be relative to an attachment on the part, another attachment, or the world
coordinate system.

The following image demonstrates how VectorForce applies a force on a part
relative to an Attachment.

![VectorForce RelativeTo][1]

The following image demonstrates how VectorForce applies a force on a part
relative to the part's center of mass.

![VectorForce CenterOfMass][2]

## Location of force

A VectorForce will apply its force on the Parent of its
[Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0), but the location where the force is
applied is determined by the [VectorForce.ApplyAtCenterOfMass](https://create.roblox.com/docs/reference/engine/classes/VectorForce#ApplyAtCenterOfMass) property.

When [VectorForce.ApplyAtCenterOfMass](https://create.roblox.com/docs/reference/engine/classes/VectorForce#ApplyAtCenterOfMass) is false, which it is by default, the
force will be applied to the part at the Attachement0's location. This means
that if the attachment is not at the center of the part, it can create a
torque on the part.

When ApplyAtCenterOfMass is set to true, the force will check if any other
parts are rigidly connected to the parent part of its Attachment0. If there
are, then the force will apply at the center of mass of all of the connected
parts. If there are no rigid connections to other parts, the force will simply
be applied at the center of mass of the part.

## Direction of force

The direction of the force is determined by the Vector3 defined by force, but
it will also be affected by the [VectorForce.RelativeTo](https://create.roblox.com/docs/reference/engine/classes/VectorForce#RelativeTo) property.

By default, [VectorForce.RelativeTo](https://create.roblox.com/docs/reference/engine/classes/VectorForce#RelativeTo) is set to
[Enum.ActuatorRelativeTo.Attachment0](https://developer.roblox.com/en-us/api-reference/enum/ActuatorRelativeTo), meaning the
force will be applied in the space local to the attachment. Remember that when
visualizing an attachment, the yellow arrow shows the direction of positive X,
and the orange bar shows the direction of positive Y. If the part the
attachment is connected to rotates, the force will change direction to make
sure it is still in the context of the attachment.

RelativeTo can also be set to
[Enum.ActuatorRelativeTo.Attachment1](https://developer.roblox.com/en-us/api-reference/enum/ActuatorRelativeTo). In this case,
the force will be applied in the space local to
[Attachment1](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1), regardless of the orientation of
Attachment0 or its connected part. If Attachment1 rotates, then the force will
change to stay oriented correctly.

Lastly, RelativeTo can also be set to
[Enum.ActuatorRelativeTo.World](https://developer.roblox.com/en-us/api-reference/enum/ActuatorRelativeTo). In this mode, the
force is applied in world coordinates, regardless of the orientation of
Attachment0 or its part.

See also:

- [Body Movers Example.rbxl][3], a sample place showcasing body movers in
  various configurations.
- [Attachments and Constraints][4], an article outlining how to create and use
  attachments and constraints

[1]: https://prod.docsiteassets.roblox.com/assets/bltacb3e3255384a7b4/VectorForceRelativeTo3.gif
[2]: https://prod.docsiteassets.roblox.com/assets/bltcdb637c5a4b55ef3/VectorForceCenterOfMass.gif
[3]:
  https://doy2mn9upadnk.cloudfront.net/uploads/default/original/3X/e/1/e17a844750802035b24f68ddcbd83f6312b8f1d6.rbxl
[4]: https://developer.roblox.com/articles/Constraints