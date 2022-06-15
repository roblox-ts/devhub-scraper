The Teams service holds a game's [Team](https://developer.roblox.com/en-us/api-reference/class/Team) objects. [Team](https://developer.roblox.com/en-us/api-reference/class/Team) objects must be parented to the Teams service.

Teams offer a range of features that are useful to developers. These can broadly be divided into features that work out-of-the-box and features developers can program into their game.

**Built-in team behaviour**  
The following functionality of Teams exists by default and does not require the developer to program any custom behaviour.

*   When part of a Team, the name above a [Player](https://developer.roblox.com/en-us/api-reference/class/Player)'s character [Model](https://developer.roblox.com/en-us/api-reference/class/Model) will be colored to the [Team.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Team/TeamColor)
*   Changing [Player.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Player/TeamColor) will cause [Player.Team](https://developer.roblox.com/en-us/api-reference/property/Player/Team) switch to the Team with the corresponding [Team.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Team/TeamColor)
*   When using the default player list users will be grouped and displayed by team
*   Setting [Player.Neutral](https://developer.roblox.com/en-us/api-reference/property/Player/Neutral) to true will cause the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) to be dis-associated with the team, but will not change [Player.Team](https://developer.roblox.com/en-us/api-reference/property/Player/Team) or [Player.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Player/TeamColor)
*   When a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) joins a game, they will be allocated to the team with [Team.AutoAssignable](https://developer.roblox.com/en-us/api-reference/property/Team/AutoAssignable) set to true that has the fewest players. If no auto assignable team is available, [Player.Neutral](https://developer.roblox.com/en-us/api-reference/property/Player/Neutral) will be set to true
*   When [SpawnLocation.Neutral](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/Neutral) is set to false, only players whose [Player.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Player/TeamColor) matches [SpawnLocation.TeamColor](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/TeamColor) can spawn on that [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation)
*   When [SpawnLocation.AllowTeamChangeOnTouch](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/AllowTeamChangeOnTouch) is set to true, a [Player](https://developer.roblox.com/en-us/api-reference/class/Player)'s [Player.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Player/TeamColor) will change to [SpawnLocation.TeamColor](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/TeamColor) when their character touches the [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation)

**Optional extended team behavior**  
Many developers chose to add the following features to teams in their own code.

*   Implement checks for team in weapon code to prevent team killing
*   Implement doors or other features that only certain teams can use
*   Periodically reassign teams to maintain team balance