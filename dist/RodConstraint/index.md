A **RodConstraint** constrains two [Attachments](https://create.roblox.com/docs/reference/engine/classes/Attachment) to remain
separated by the value specified by [RodConstraint.Length](https://create.roblox.com/docs/reference/engine/classes/RodConstraint#Length). While the
attachments remain at a set distance from one another, they can both rotate
freely.

By default, RodConstraints do not have angle constraints and allow each part
to rotate without angular constraint. However, setting
[LimitsEnabled](https://create.roblox.com/docs/reference/engine/classes/RodConstraint#LimitsEnabled) reveal the
[LimitAngle0](https://create.roblox.com/docs/reference/engine/classes/RodConstraint#LimitAngle0) and
[LimitAngle1](https://create.roblox.com/docs/reference/engine/classes/RodConstraint#LimitAngle1) properties, which control the maximum
angle that either end of the rod may have against the respective attachment.
In the image below, the two parts are joined by a RodConstraint with 45 degree
limits on each end. The red part is not [Anchored](https://create.roblox.com/docs/reference/engine/classes/BasePart#Anchored).

![undefined](https://prod.docsiteassets.roblox.com/https://images.contentstack.io/v3https://prod.docsiteassets.roblox.com/assets/bltc2ad39afa86662c8/blt76b53a8b2f394e59/60feee1161f38746a5779267/Screenshot_7.png)

Note that if this constraint attaches one part (**A**) to another part (**B**)
that is anchored or connected to an anchored part (**Z**), part **A** will not
be locally simulated when interacting with a player.