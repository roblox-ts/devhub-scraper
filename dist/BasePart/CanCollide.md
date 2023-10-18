CanCollide determines whether a part will physically interact with other
parts. When disabled, other parts can pass through the brick
uninterrupted. Parts used for **decoration** usually have CanCollide
disabled, as they need not be considered by the physics engine.

If a part is not [`BasePart.Anchored`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Anchored) and has CanCollide disabled, it
may fall out of the world to be eventually destroyed by
[`Workspace.FallenPartsDestroyHeight`](https://create.roblox.com/docs/reference/engine/classes/Workspace#FallenPartsDestroyHeight).

When CanCollide is disabled, parts may still fire the
[`BasePart.Touched`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Touched) event (as well the other parts touching them).
You can disable this with [`BasePart.CanTouch`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanTouch).

For more information on collisions, see
[Collisions](https://create.roblox.com/docs/workspace/collisions).