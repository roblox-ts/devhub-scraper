The PreferredPlayersInternal [Players](https://developer.roblox.com/en-us/api-reference/class/Players) property is the internal variant of [Players.PreferredPlayersInternal](https://developer.roblox.com/en-us/api-reference/property/Players/PreferredPlayersInternal), which controls the preferred amount of players for this server.

When someone press the Play-button, Roblox will try to fill all servers up to the amount of given players.  
If there is a server that has friends on you in it, Roblox will send you to that server instead.  
(Unless the server is completely full)

This system allows developers to have servers more friends-friendly. Normally, when PreferredPlayers ~= MaxPlayers, a server would never fill up, unless a player follows another player, or a player pressing the Play button has one or more friends in that server.

While this property cannot be set through [Script](https://developer.roblox.com/en-us/api-reference/class/Script)s or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)s in-game, it can be set from the place settings' _Access_ tab on the site.

##Example  
Given a server with 8 players where the `Player/MaximumPlayers` is 10 and the PreferredPlayers is 8, 2 things can happen whenever a player press the Play-button:

*   The player has friends in the server, which makes Roblox send them to that server
*   The player has no friends in it, and will start a new server, as the server is already “filled” up to PreferredPlayers amount.