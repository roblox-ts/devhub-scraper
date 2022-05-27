The **BodyPosition** object applies a force on a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) such that it will
maintain a constant position in the world. The
[Position](https://create.roblox.com/docs/reference/engine/classes/BodyPosition#Position) property, not to be confused with
[BasePart.Position](https://create.roblox.com/docs/reference/engine/classes/BasePart#Position), controls the target world position. This is the
translational counterpart to a [BodyGyro](https://create.roblox.com/docs/reference/engine/classes/BodyGyro). If you need further control on a
force applied to an object, consider using a [BodyForce](https://create.roblox.com/docs/reference/engine/classes/BodyForce) or [BodyThrust](https://create.roblox.com/docs/reference/engine/classes/BodyThrust)
instead.

The strength of the force applied by this object is controlled by several
factors, namely the distance to the goal position: the force is stronger when
farther away from the goal. This is amplified by [P](https://create.roblox.com/docs/reference/engine/classes/BodyPosition#P) (power).
The present velocity will also dampen the force applied by this object, and
this is amplified by [D](https://create.roblox.com/docs/reference/engine/classes/BodyPosition#D) (dampening). The resulting force is
then capped by [MaxForce](https://create.roblox.com/docs/reference/engine/classes/BodyPosition#MaxForce). Note the force applied on the
part to achieve the goal position may vary on a per-axis basis.