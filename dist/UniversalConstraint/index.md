A **UniversalConstraint** ensures two axes on two bodies remain perpendicular.
Contextually, this constraint is more restrictive than a
[`BallSocketConstraint`](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint) but less restrictive than a
[`HingeConstraint`](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint) by one degree of freedom.

Example applications of this constraint include transmitting power between the
transmission and drive shafts of cars, robotics, and more.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Limits

Enabling the [`LimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/UniversalConstraint#LimitsEnabled) property
exposes the [`MaxAngle`](https://create.roblox.com/docs/reference/engine/classes/UniversalConstraint#MaxAngle) limit to restrict
tilt within a cone, as well as
[`Restitution`](https://create.roblox.com/docs/reference/engine/classes/UniversalConstraint#Restitution) which defines the
elasticity of the attachments when they reach the limit.