**Kick** disconnects a player from a game once, optionally providing the kicked player a message in the process. Its primary use is in moderation tools on abusive players. This function should never be used in typical gameplay and only in exceptional situations where it would be detrimental to a game server for the player in question to remain connected.

Although it is possible for a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) to invoke this function only on the [LocalPlayer](https://developer.roblox.com/en-us/api-reference/property/Players/LocalPlayer), it is is generally a better idea for server-side [Script](https://developer.roblox.com/en-us/api-reference/class/Script)s to kick players.

Only allow specific users whom you trust to trigger this method on other players. If used in conjunction with a [DataStore](https://developer.roblox.com/en-us/api-reference/class/DataStore), it is possible to create persistent bans with expiration dates. Alternatively, a certain threshold of votes from other players to kick an abusive player could be more appropriate for certain games. For games which teleport players to private servers, like player-controlled homesteads or round-based games, it may be more appropriate to use [TeleportService](https://developer.roblox.com/en-us/api-reference/class/TeleportService) to forcibly teleport the player back to a lobby place instead of kicking them from a game altogether.

This function does not prevent a player from returning to the same server from which it was called. If a player attempts to rejoin a server and they should still not be connected to the game, you should call this function again immediately after they've arrived. If a player is to be kicked as soon as they join, you should skip needless DataStore operations and other expensive API calls done on their behalf, such as saving/loading game data.

### Example without Message

![An example of Kick without a message.](https://developer.roblox.com/assets/blt6d90cfb7f10d0562/Kick.jpg)

### Example with Message

![An example of Kick with message "Don't be disruptive!"](https://developer.roblox.com/assets/blt1a61a7fb809374d1/Kick-With-Message.jpg)