This method sets the collision group of the specified part to the group
with the specified name. It is equivalent to setting the
[`BasePart.CollisionGroupId`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CollisionGroupId), although calling this method is the
recommended approach.

This method will throw a runtime error in the following circumstances:

- The part parameter is not a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) instance.
- The specified group does not exist.