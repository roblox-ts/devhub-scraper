A **TorsionSpringConstraint** applies a torque based on a relative angle and a
relative angular velocity. Specifically, torsion springs try to bring two axes
from two parts together in a compliant way.

Correct orientation of a torsion spring's attachments is important. The
constraint will attempt to bring the
[`SecondaryAxis`](https://create.roblox.com/docs/reference/engine/classes/Attachment#SecondaryAxis) of each attachment into
alignment. When building mechanisms like swinging doors, ensure that the
secondary axes are **perpendicular** to the intended axis of rotation.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Damping

The [`Damping`](https://create.roblox.com/docs/reference/engine/classes/TorsionSpringConstraint#Damping) value controls how fast
the spring's oscillation dies down. A value of 0 allows the spring to
oscillate endlessly, while higher values bring the spring to a rest more
quickly.
#### Stiffness

[`Stiffness`](https://create.roblox.com/docs/reference/engine/classes/TorsionSpringConstraint#Stiffness) sets the torsional
strength of the spring. Higher values create a spring that responds with more
force.
#### Limits

Enabling the [`LimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/TorsionSpringConstraint#LimitsEnabled)
property exposes the [`MaxAngle`](https://create.roblox.com/docs/reference/engine/classes/TorsionSpringConstraint#MaxAngle) value
to restrict the spring's range within a cone; it also exposes the
[`Restitution`](https://create.roblox.com/docs/reference/engine/classes/TorsionSpringConstraint#Restitution) value which defines
the elasticity of the attachments when they reach their limit.