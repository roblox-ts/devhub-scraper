Fires when the speed at which a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is climbing changes.

[`Humanoids`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) can climb up ladders made out of
[`Parts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) or [`TrussParts`](https://create.roblox.com/docs/reference/engine/classes/TrussPart).

[`Humanoids`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) climb at 70% of their
[`Humanoid.WalkSpeed`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkSpeed).

This event will not always fire with a speed of 0 when the
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) stops climbing.

See also:

- For swimming and running see the [`Humanoid.Swimming`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Swimming) and
[`Humanoid.Running`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Running) events
- You can also detect when a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is climbing using the
[`Humanoid.StateChanged`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#StateChanged) event
- You can disable climbing using the [`Humanoid:SetStateEnabled()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#SetStateEnabled)
function