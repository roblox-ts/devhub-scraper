This event fires when the speed at which a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is swimming in
[`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) water changes.

[`Humanoids`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) swim at 87.5% of their
[`Humanoid.WalkSpeed`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkSpeed).

This event will not always fire with a speed of 0 when the
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) stops swimming.

See also:

- For running and climbing see the [`Humanoid.Running`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Running) and
[`Humanoid.Climbing`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Climbing) events
- You can also detect when a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is swimming using the
[`Humanoid.StateChanged`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#StateChanged) event
- You can disable swimming using the [`Humanoid:SetStateEnabled()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#SetStateEnabled)
function