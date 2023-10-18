This event fires when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) finishes walking to a goal
declared by the [`Humanoid.WalkToPoint`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkToPoint) and
[`Humanoid.WalkToPart`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkToPart) properties.

The [`Humanoid.WalkToPoint`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkToPoint) and [`Humanoid.WalkToPart`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#WalkToPart)
properties can be set individually, or using the [`Humanoid:MoveTo()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MoveTo)
function.

If the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) reaches its goal within 8 seconds, this event will
return with *reached* as true. If the goal is not reached within 8 seconds
the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will stop walking and *reached* will be false. This
timeout can be reset be calling [`Humanoid:MoveTo()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#MoveTo) again within the
timeout period.