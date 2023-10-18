This event fires when a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) either sits in or gets up from a
[`Seat`](https://create.roblox.com/docs/reference/engine/classes/Seat) or [`VehicleSeat`](https://create.roblox.com/docs/reference/engine/classes/VehicleSeat).

When a character comes into contact with a seat, they are attached to the
seat and a sitting animation plays. For more information on this, see the
[`Seat`](https://create.roblox.com/docs/reference/engine/classes/Seat) page.

- If the character is sitting down, the `active` parameter will be
**true** and `currentSeatPart` will be the seat they are currently
sitting in.
- If the character got up from a seat, the `active` parameter will be
**false** and `currentSeatPart` will be nil.

See also:

- [`Humanoid.Sit`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Sit), which indicates if a Humanoid is currently sitting
- [`Humanoid.SeatPart`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#SeatPart), which indicates the seat a Humanoid is
currently sitting in, if any.