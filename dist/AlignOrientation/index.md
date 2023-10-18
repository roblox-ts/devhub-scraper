The **AlignOrientation** constraint applies torque to align two attachments,
or to align one attachment with a goal orientation. As indicated by the name,
it only affects the **orientation** of the attachments, not their position (to
align attachments **positionally**, see [`AlignPosition`](https://create.roblox.com/docs/reference/engine/classes/AlignPosition)).

Torque created by [`AlignOrientation`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation) is applied about the center of mass
of the parent of the attachments, or the center of mass of parts rigidly
connected to the parents.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Affected Axes

The axes affected by torque are controlled through the constraint's
[`PrimaryAxisOnly`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#PrimaryAxisOnly) property. If false
(default), the constraint will apply torque about all 3 axes to achieve
alignment. If true, torque will only occur when the primary axes become
misaligned.
#### Reactionary Torque

By default, the constraint only applies torque to
[`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0) while
[`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) remains unaffected. If desired,
torque can be applied to both attachments in **equal and opposite directions**
by enabling
[`ReactionTorqueEnabled`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#ReactionTorqueEnabled).
#### Torque Magnitude

You can configure this constraint to apply the maximum torque that constraints
allow through the [`RigidityEnabled`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#RigidityEnabled)
property. When true, the physics solver reacts as quickly as possible to
complete the alignment. When false, the torque is determined by
[`MaxTorque`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#MaxTorque),
[`MaxAngularVelocity`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#MaxAngularVelocity), and
[`Responsiveness`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#Responsiveness).
#### Attachment Mode

This constraint can use either **one** or **two** attachments in calculating
its goal. See [`Mode`](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#Mode) for details.