This event fires when a [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid) either sits in or gets up from a [Seat](https://developer.roblox.com/en-us/api-reference/class/Seat) or [VehicleSeat](https://developer.roblox.com/en-us/api-reference/class/VehicleSeat).

When a character comes into contact with a seat, they are attached to the seat and a sitting animation plays. For more information on this, see the [Seat](https://developer.roblox.com/en-us/api-reference/class/Seat) page.

*   If the character is sitting down, the `active` parameter will be **true** and `currentSeatPart` will be the seat they are currently sitting in.
*   If the character got up from a seat, the `active` parameter will be **false** and `currentSeatPart` will be nil.

See also
--------

*   [Humanoid.Sit](https://developer.roblox.com/en-us/api-reference/property/Humanoid/Sit), which indicates if a Humanoid is currently sitting
*   [Humanoid.SeatPart](https://developer.roblox.com/en-us/api-reference/property/Humanoid/SeatPart), which indicates the seat a Humanoid is currently sitting in, if any.