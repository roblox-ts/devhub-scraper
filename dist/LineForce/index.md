The **LineForce** constraint applies a force along the theoretical line
connecting its two [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment). As the end points
(attachments) move, the direction of force will change accordingly.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Force Location

By default, force is applied to either parent at its attachment location. If
desired, force can be focused at each parent's center of mass by enabling
[`ApplyAtCenterOfMass`](https://create.roblox.com/docs/reference/engine/classes/LineForce#ApplyAtCenterOfMass).
#### Inverse Square Law

When [`InverseSquareLaw`](https://create.roblox.com/docs/reference/engine/classes/LineForce#InverseSquareLaw) is true, the force
magnitude is multiplied by the inverse square of the distance, meaning the
force will increase exponentially as the two attachments get closer together,
like magnets. When using this setting, it's recommended that you set a
[`MaxForce`](https://create.roblox.com/docs/reference/engine/classes/LineForce#MaxForce) threshold to prevent infinite force if the
attachments align precisely.
#### Reactionary Force

By default, the constraint only applies force to
[`Attachment0`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0), while
[`Attachment1`](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) remains unaffected. However, force
can be applied to both attachments in **equal and opposite directions** by
enabling [`ReactionForceEnabled`](https://create.roblox.com/docs/reference/engine/classes/LineForce#ReactionForceEnabled).