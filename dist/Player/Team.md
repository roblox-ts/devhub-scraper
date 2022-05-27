The Team property is a reference to a [Team](https://create.roblox.com/docs/reference/engine/classes/Team) object within the [Teams](https://create.roblox.com/docs/reference/engine/classes/Teams)
service. It determines the team the player is on; if the [Player](https://create.roblox.com/docs/reference/engine/classes/Player) isn't on
a team or has an invalid [Player.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor), this property is nil. When
this property is set, the player has joined the [Team](https://create.roblox.com/docs/reference/engine/classes/Team) and the
[Team.PlayerAdded](https://create.roblox.com/docs/reference/engine/classes/Team#PlayerAdded) event fires on the associated team. Similarly,
[Team.PlayerRemoved](https://create.roblox.com/docs/reference/engine/classes/Team#PlayerRemoved) fires when the property is unset from a certain
[Team](https://create.roblox.com/docs/reference/engine/classes/Team).