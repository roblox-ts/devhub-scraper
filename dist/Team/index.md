The [Team](https://developer.roblox.com/en-us/api-reference/class/Team) class represents a faction in a Roblox place. The only valid parent for a Team is in the [Teams](https://developer.roblox.com/en-us/api-reference/class/Teams) service. Teams offer a range of features that are useful to developers that can be divided into two rough groups:

*   Features that work 'out of the box'
*   Features developers can program into their game.

\*\*Built-in Team Behavior \*\*

The following functionality of Teams exists by default and does not require the developer to program any custom behavior.

*   When part of a Team, the name above a [Player](https://developer.roblox.com/en-us/api-reference/class/Player)'s character [Model](https://developer.roblox.com/en-us/api-reference/class/Model) will be colored to the [Team.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Team/TeamColor)
*   Changing [Player.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Player/TeamColor) will cause [Player.Team](https://developer.roblox.com/en-us/api-reference/property/Player/Team) to switch to the Team with the corresponding [Team.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Team/TeamColor)
*   When using the default player list users will be grouped and displayed together as a team
*   Setting [Player.Neutral](https://developer.roblox.com/en-us/api-reference/property/Player/Neutral) to true will cause the [Player](https://developer.roblox.com/en-us/api-reference/class/Player) to be disassociated with the team, however, it will not change [Player.Team](https://developer.roblox.com/en-us/api-reference/property/Player/Team) or [Player.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Player/TeamColor)
*   When a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) joins a game, they will be allocated to the team with [Team.AutoAssignable](https://developer.roblox.com/en-us/api-reference/property/Team/AutoAssignable) set to true that has the fewest players. If no auto assignable team is available, [Player.Neutral](https://developer.roblox.com/en-us/api-reference/property/Player/Neutral) will be set to true
*   When [SpawnLocation.Neutral](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/Neutral) is set to false, only players whose [Player.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Player/TeamColor) matches [SpawnLocation.TeamColor](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/TeamColor) can spawn on that [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation)
*   When [SpawnLocation.AllowTeamChangeOnTouch](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/AllowTeamChangeOnTouch) is set to true, a [Player](https://developer.roblox.com/en-us/api-reference/class/Player)'s [Player.TeamColor](https://developer.roblox.com/en-us/api-reference/property/Player/TeamColor) will change to [SpawnLocation.TeamColor](https://developer.roblox.com/en-us/api-reference/property/SpawnLocation/TeamColor) when their character touches the [SpawnLocation](https://developer.roblox.com/en-us/api-reference/class/SpawnLocation)

**Optional Extended Team Behaviors**

Many developers chose to add the following features to teams in their own code.

*   Implement checks in weapon code to prevent friendly fire.
*   Implement checks in doors or other features that allow only certain teams to use them
*   Periodically reassign teams to maintain team balance