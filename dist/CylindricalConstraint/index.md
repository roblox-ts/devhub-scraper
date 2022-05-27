A **CylindricalConstraint** allows its attachments to slide along one axis and
rotate about another axis. It can be thought of like a combination of a
[PrismaticConstraint](https://create.roblox.com/docs/reference/engine/classes/PrismaticConstraint) and a [HingeConstraint](https://create.roblox.com/docs/reference/engine/classes/HingeConstraint). The sliding axis is determined
by the **X** axis of the constraint's [Constraint.Attachment0](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment0). The rotation
axis is centered at the constraint's [Constraint.Attachment1](https://create.roblox.com/docs/reference/engine/classes/Constraint#Attachment1) and is angled
off of the sliding constraint by the constraint's
[CylindricalConstraint.InclinationAngle](https://create.roblox.com/docs/reference/engine/classes/CylindricalConstraint#InclinationAngle).

This constraint, along with a [SpringConstraint](https://create.roblox.com/docs/reference/engine/classes/SpringConstraint), is ideal for building
vehicle suspension.

Note that if this constraint attaches one part (**A**) to another part (**B**)
that is anchored or connected to an anchored part (**Z**), part **A** will not
be locally simulated when interacting with a player.