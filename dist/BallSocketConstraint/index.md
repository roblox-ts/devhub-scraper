A **BallSocketConstraint** constrains its [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment) so
that they occupy the same position. By default it allows both attachments to
freely rotate about all of their axes, but if
[`LimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint#LimitsEnabled) is true, the
attachments can only rotate in a limited cone.

Note that if this constraint attaches one part (**A**) to another part (**B**)
that is anchored or connected to an anchored part (**Z**), part **A** will not
be locally simulated when interacting with a player.

When configuring this constraint, it may be helpful to study
[Roblox Units](https://create.roblox.com/docs/physics/units) to understand how Roblox units
compare to metric units.
#### Limits

You can set limits to restrict both **tilt** and **twist** of a ball socket,
similar to how a human's head can tilt and turn within a limited axial range.
Enabling the [`LimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint#LimitsEnabled) property
exposes the [`UpperAngle`](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint#UpperAngle) value to
restrict **tilt** within a cone; it also exposes the
[`TwistLimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint#TwistLimitsEnabled) property
which, when enabled, lets you restrict **twist** rotation through the
[`TwistLowerAngle`](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint#TwistLowerAngle) and
[`TwistUpperAngle`](https://create.roblox.com/docs/reference/engine/classes/BallSocketConstraint#TwistUpperAngle) limits.