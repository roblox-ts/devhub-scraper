The MembershipType [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) property can be used to determine the
membership type of the player. It holds a `Enum.MembershipType` enum of
the account's membership type.

This property can only be read from to determine membership (it cannot be
set to another membership type). The property can only be changed via
[`CoreScript`](https://create.roblox.com/docs/reference/engine/classes/CoreScript)s using [`Player:SetMembershipType()`](https://create.roblox.com/docs/reference/engine/classes/Player#SetMembershipType) - which are
not accessible.