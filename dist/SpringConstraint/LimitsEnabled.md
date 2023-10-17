Sets whether the [`SpringConstraint`](https://create.roblox.com/docs/reference/engine/classes/SpringConstraint) enforces a minimum and maximum
length. If the constraint's [`Attachments`](https://create.roblox.com/docs/reference/engine/classes/Attachment) reach these
limits, they will simply stop moving apart from one another without
restitution. If you need restitution or elasticity at the ends of the
range of motion, you can combine a [`SpringConstraint`](https://create.roblox.com/docs/reference/engine/classes/SpringConstraint) with another
constraint that allows restitution at the end of its range, such as a
[`PrismaticConstraint`](https://create.roblox.com/docs/reference/engine/classes/PrismaticConstraint) or [`RopeConstraint`](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint).