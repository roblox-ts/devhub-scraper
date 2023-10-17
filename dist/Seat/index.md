A type of [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) that a player character can 'sit' in. When a
character touches an enabled Seat object, it will be attached to the part by a
[`Weld`](https://create.roblox.com/docs/reference/engine/classes/Weld) and the default character scripts will play a sitting animation.
## How do Seats work?

When a model containing a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) and a [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) called
'HumanoidRootPart' (generally a player character) touches a seat, a
[`Weld`](https://create.roblox.com/docs/reference/engine/classes/Weld) is created between the seat and the part. The
[`C0`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C0) and [`C1`](https://create.roblox.com/docs/reference/engine/classes/JointInstance#C1) properties are
configured so that the character is welded 2 studs above the seat. This weld
is named 'SeatWeld' and parented to the seat.

When sitting the [`Seat.Occupant`](https://create.roblox.com/docs/reference/engine/classes/Seat#Occupant) property is set to the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
that is 'sitting' in the seat. Furthermore the [`Humanoid.SeatPart`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#SeatPart)
property of the humanoid is set to the seat.

A character can also be forced to sit in a seat using the [`Seat:Sit()`](https://create.roblox.com/docs/reference/engine/classes/Seat#Sit)
function.

There are two ways for a character to get out of a seat. When a player jumps,
they are removed from the seat. However this can also be done manually by
destroying the seat weld, for example:
```lua
seat:FindFirstChild("SeatWeld"):Destroy()
```

Note seats have a cooldown (currently 3 seconds) that is on a per-character
per-seat basis. This means once a character has gotten out of a seat they
cannot sit back on the same seat for 3 seconds. This cooldown behavior may
change and should not be relied upon by developers.
## What can Seats be used for?

Seats have a diverse range of uses, ranging from the obvious to the more
unconventional.

- Creating chairs or benches without the need for any programming
- Allowing characters to 'sit' in moving objects such as vehicles without
getting flung around
- Creating interfaces that are controlled by the character in the seat using
the [`Seat.Occupant`](https://create.roblox.com/docs/reference/engine/classes/Seat#Occupant) property