The Sit property is a boolean that indicates whether the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
is currently sitting. [`Humanoids`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) can be forced into a
sitting state by setting this property's value to true. If the
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) isn't attached to a seat while in its sitting state, it
will trip over with no collision in its legs. A [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) can
escape from the sitting state by jumping.

Note:

- The [`Seat`](https://create.roblox.com/docs/reference/engine/classes/Seat) or [`VehicleSeat`](https://create.roblox.com/docs/reference/engine/classes/VehicleSeat) the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is sitting
on can be obtained using the [`Humanoid.SeatPart`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#SeatPart) property
- It is possible to detect when a Humanoid sits by connecting to the
[`Humanoid.Seated`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Seated) event.