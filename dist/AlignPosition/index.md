The **AlignPosition** constraint applies force to move two attachments
together, or to move one attachment to a goal position. As indicated by the
name, it only affects the **position** of the attachments, not their
orientation (to align attachments by **orientation**, see
[`AlignOrientation`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation)).

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Force Location

By default, force is applied to the parent of
[`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) at that attachment's location,
meaning that if the parent's center of mass is not aligned with the direction
of the force, torque will be applied as well as force. Alternatively, force
can be applied to the parents' center of mass by toggling on
[`ApplyAtCenterOfMass`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#ApplyAtCenterOfMass).
#### Reactionary Force

By default, the constraint only applies force to
[`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) while
[`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) remains unaffected. If desired,
force can be applied to both attachments in **equal and opposite directions**
by enabling [`ReactionForceEnabled`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#ReactionForceEnabled).
#### Force Limits

You can configure this constraint to apply the maximum force that constraints
allow through the [`RigidityEnabled`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#RigidityEnabled)
property. When true, the physics solver reacts as quickly as possible to
complete the alignment. When false, the force applied by the constraint is
limited based on [`ForceLimitMode`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#ForceLimitMode),
[`MaxVelocity`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#MaxVelocity), and
[`Responsiveness`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#Responsiveness). See
[`ForceLimitMode`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#ForceLimitMode) for further details.
#### Attachment Mode

This constraint can use either **one** or **two** attachments in calculating
its goal. See [`Mode`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition#Mode) for details.