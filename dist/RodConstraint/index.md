A **RodConstraint** keeps two attachments separated by its defined
[`Length`](https://create.roblox.com/docs/reference/engine/classes/RodConstraint#Length). By default, both attachments can rotate
freely, although you can enable limits to restrict rotational tilt.

Note that if this constraint attaches one part (**A**) to another part (**B**)
that is anchored or connected to an anchored part (**Z**), part **A** will not
be locally simulated when interacting with a player.
#### Limits

You can limit rotation of the attachments within a cone, independently of each
other, by enabling the [`LimitsEnabled`](https://create.roblox.com/docs/reference/engine/classes/RodConstraint#LimitsEnabled)
property and setting [`LimitAngle0`](https://create.roblox.com/docs/reference/engine/classes/RodConstraint#LimitAngle0) and
[`LimitAngle1`](https://create.roblox.com/docs/reference/engine/classes/RodConstraint#LimitAngle1) respectively.