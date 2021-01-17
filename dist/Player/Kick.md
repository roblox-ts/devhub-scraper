The Kick [Player](https://developer.roblox.com/en-us/api-reference/class/Player) method allows a game to gracefully disconnect a client from the game and optionally provide a message to the disconnected player. This is useful for moderating abusive players. When used in conjunction with a [DataStore](https://developer.roblox.com/en-us/api-reference/class/DataStore), it is possible to create ban lists with expiration dates. Only allow specific whitelisted users whom you trust to trigger this method on other players.

When used from a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript), only the local player's client can be kicked.

##Example  
When calling this method on a Player with no arguments, they will be disconnected from the server and receive the default message: This game has shut down.

![Getting kicked without a message.](https://developer.roblox.com/assets/blta0f9570676ca14ef/GettingKickedCropped.png)

Calling this method on a player but providing a string as the first argument will replace this message with the contents of the string.

![Getting kicked with a message.](https://developer.roblox.com/assets/blt20acf098fdbd2b30/KickedWithANoteCropped.png)