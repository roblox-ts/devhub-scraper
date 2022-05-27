GroupService is a service that allows developers to fetch information about a
Roblox group from within a game.

Basic information on the group, including it's name, description, owner, roles
and emblem can be fetched using [GroupService:GetGroupInfoAsync](https://create.roblox.com/docs/reference/engine/classes/GroupService#GetGroupInfoAsync). Lists of a
group's allies and enemies can be fetched using [GroupService:GetAlliesAsync](https://create.roblox.com/docs/reference/engine/classes/GroupService#GetAlliesAsync)
and [GroupService:GetEnemiesAsync](https://create.roblox.com/docs/reference/engine/classes/GroupService#GetEnemiesAsync).

GroupService can also be used to fetch a list of group's a player is a member
of, using [GroupService:GetGroupsAsync](https://create.roblox.com/docs/reference/engine/classes/GroupService#GetGroupsAsync). Note, developers wishing to verify if
a player is in a group should use the [Player](https://create.roblox.com/docs/reference/engine/classes/Player) [Player:IsInGroup](https://create.roblox.com/docs/reference/engine/classes/Player#IsInGroup) function
rather than [GroupService:GetGroupsAsync](https://create.roblox.com/docs/reference/engine/classes/GroupService#GetGroupsAsync).

The service has a number of useful applications, such as detecting if a player
is an ally or enemy upon joining the game.