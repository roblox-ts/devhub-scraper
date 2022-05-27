Restitution controls how _elastic_ an [Attachment](https://create.roblox.com/docs/reference/engine/classes/Attachment) connected by a
[RopeConstraint](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint) will be when reaching the end of the rope
[RopeConstraint.Length](https://create.roblox.com/docs/reference/engine/classes/RopeConstraint#Length). The value of this property is constrained between
0 and 1.

A RopeConstraint with a Restitution of 0 will not bounce when its
Attachments reach their maximum separation.

![Restitution of 0][1]

A RopeConstraint with a Restitution of 1 will be almost completely elastic
when its Attachments reach their maximum separation.

![Restitution of 1][2]

[1]: https://prod.docsiteassets.roblox.com/assets/blt918fb17dcde0ebf9/RopeConstraintRestitution0.gif
[2]: https://prod.docsiteassets.roblox.com/assets/blt75107360c23831ee/RopeConstraintRestitution1.gif