The Teams service holds a game's [Team](https://create.roblox.com/docs/reference/engine/classes/Team) objects. [Team](https://create.roblox.com/docs/reference/engine/classes/Team) objects must be
parented to the Teams service.

Teams offer a range of features that are useful to developers. These can
broadly be divided into features that work out-of-the-box and features
developers can program into their game.

**Built-in team behaviour** The following functionality of Teams exists by
default and does not require the developer to program any custom behaviour.

- When part of a Team, the name above a [Player](https://create.roblox.com/docs/reference/engine/classes/Player)'s character [Model](https://create.roblox.com/docs/reference/engine/classes/Model) will be
  colored to the [Team.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Team#TeamColor)
- Changing [Player.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor) will cause [Player.Team](https://create.roblox.com/docs/reference/engine/classes/Player#Team) switch to the Team with
  the corresponding [Team.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Team#TeamColor)
- When using the default player list users will be grouped and displayed by
  team
- Setting [Player.Neutral](https://create.roblox.com/docs/reference/engine/classes/Player#Neutral) to true will cause the [Player](https://create.roblox.com/docs/reference/engine/classes/Player) to be
  dis-associated with the team, but will not change [Player.Team](https://create.roblox.com/docs/reference/engine/classes/Player#Team) or
  [Player.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor)
- When a [Player](https://create.roblox.com/docs/reference/engine/classes/Player) joins a game, they will be allocated to the team with
  [Team.AutoAssignable](https://create.roblox.com/docs/reference/engine/classes/Team#AutoAssignable) set to true that has the fewest players. If no auto
  assignable team is available, [Player.Neutral](https://create.roblox.com/docs/reference/engine/classes/Player#Neutral) will be set to true
- When [SpawnLocation.Neutral](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#Neutral) is set to false, only players whose
  [Player.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor) matches [SpawnLocation.TeamColor](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor) can spawn on that
  [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation)
- When [SpawnLocation.AllowTeamChangeOnTouch](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#AllowTeamChangeOnTouch) is set to true, a [Player](https://create.roblox.com/docs/reference/engine/classes/Player)'s
  [Player.TeamColor](https://create.roblox.com/docs/reference/engine/classes/Player#TeamColor) will change to [SpawnLocation.TeamColor](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation#TeamColor) when their
  character touches the [SpawnLocation](https://create.roblox.com/docs/reference/engine/classes/SpawnLocation)

**Optional extended team behavior** Many developers chose to add the following
features to teams in their own code.

- Implement checks for team in weapon code to prevent team killing
- Implement doors or other features that only certain teams can use
- Periodically reassign teams to maintain team balance