This event fires when the [`Humanoid.Health`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Health) changes. However, it
will not fire if the health is increasing from a value equal to or greater
than the [`Humanoid.MaxHealth`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MaxHealth).

When [`Humanoid.Health`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Health) reaches zero, the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will die
and the [`Humanoid.Died`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Died) event will fire. This event will fire with a
value of zero.