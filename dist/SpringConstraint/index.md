A **SpringConstraint** applies a force to its [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment)
based on spring and damper behavior. This constraint, along with a
[`CylindricalConstraint`](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint), is ideal for building vehicle suspension.

Note that if this constraint attaches one part (**A**) to another part (**B**)
that is anchored or connected to an anchored part (**Z**), part **A** will not
be locally simulated when interacting with a player.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Free Length

[`FreeLength`](https://create.roblox.com/docs/reference/engine/classes/SpringConstraint#FreeLength) defines the natural resting
length of the spring. If the attachments are further apart than the free
length, they are forced together; if the attachments are closer together than
the free length, they are forced apart.
#### Damping

The [`Damping`](https://create.roblox.com/docs/reference/engine/classes/SpringConstraint#Damping) value controls how fast the
spring's oscillation dies down. A value of 0 allows the spring to oscillate
endlessly, while higher values bring the spring to a rest more quickly.
#### Stiffness

[`Stiffness`](https://create.roblox.com/docs/reference/engine/classes/SpringConstraint#Stiffness) sets the strength of the spring.
Higher values create a spring that responds with more force when its
attachments are closer together or further apart than
[`FreeLength`](https://create.roblox.com/docs/reference/engine/classes/SpringConstraint#FreeLength).
#### Limits

Enabling the [`LimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/SpringConstraint#LimitsEnabled) property
exposes the [`MinLength`](https://create.roblox.com/docs/reference/engine/classes/SpringConstraint#MinLength) and
[`MaxLength`](https://create.roblox.com/docs/reference/engine/classes/SpringConstraint#MaxLength) values for setting the minimum
and maximum length of the spring. If the spring's attachments reach these
limits, they stop moving apart from one another without restitution.