This function causes the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) to attempt to walk to the given
location by setting the [`Humanoid.WalkToPoint`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkToPoint) and
[`Humanoid.WalkToPart`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkToPart) properties.

The *location* and *part* parameters correspond with what
[`Humanoid.WalkToPoint`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkToPoint) and [`Humanoid.WalkToPart`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkToPart) will be set
to.

If the *part* parameter is specified, the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will still
attempt to walk to the point. However, if the part moves then the point
the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is walking to will move to be at the same position
**relative to the part**. If the *part* parameter is not specified, then
the position the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is walking to will not change.

The *reach goal* state of a humanoid will timeout after 8 seconds if it
doesn't reach its goal. This is done so that NPCs won't get stuck waiting
for [`Humanoid.MoveToFinished`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MoveToFinished) to fire. If you don't want this to
happen, you should repeatedly call MoveTo so that the timeout will keep
resetting.