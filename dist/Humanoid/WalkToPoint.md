WalkToPoint describes the 3D position in space that a humanoid is trying
to reach, after having been prompted to do so by the Humanoid's
[`Humanoid:MoveTo()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MoveTo) function.

If a humanoid's [`Humanoid.WalkToPart`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkToPart) is set, the goal is set by
transforming WalkToPoint relative to the parts position and rotation. If
WalkToPart is not set, then the humanoid will try to reach the 3D position
specified by WalkToPoint directly.
#### Caveats

- The value of WalkToPoint must be changed to a different value in order
for the humanoid to start walking towards it.
- If you want to make a humanoid walk to `0,0,0`, you should use the
Humanoid's MoveTo function.
- This may be changed in the future.
- The *reach goal* state of a humanoid will timeout after 8 seconds if it
doesn't reach its goal.
- This is done so that NPCs won't get stuck waiting for
[`Humanoid.MoveToFinished`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MoveToFinished) to fire.
- If you don't want this to happen, you should repeatedly call MoveTo so
that the timeout will keep resetting.