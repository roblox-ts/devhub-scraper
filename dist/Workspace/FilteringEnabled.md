**Warning!** Experimental Mode has been discontinued, meaning this property will no longer take effect.

Determines whether changes made from the client will replicate to the server or not. When this property is disabled, the game is in 'Experimental Mode'.

This property is not replicated, meaning it cannot be changed once the game has started. For this reason, developers should only set this property in Roblox Studio.

What does FilteringEnabled do?
------------------------------

When FilteringEnabled is disabled, the place is in 'Experimental Mode'. In 'Experimental Mode', changes made to the game on the client replicate back to the server. For some, this makes games simpler to make, but means exploiters can change nearly anything in the game (such as deleting the baseplate).

When FilteringEnabled is enabled, everything continues to replicate from the server to the client (with a few exceptions such as [ServerStorage](https://developer.roblox.com/en-us/api-reference/class/ServerStorage) and `ServerScriptStorage`). However, actions made by the client will no longer freely replicate to the server. Instead, [RemoteEvent](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent)s and [RemoteFunction](https://developer.roblox.com/en-us/api-reference/class/RemoteFunction)s need to be used by the client to 'request' the server preforms certain actions on its behalf.

What are the exceptions to FilteringEnabled?
--------------------------------------------

Whilst FilteringEnabled prevents almost everything from replicating from the client to the server, there are some exceptions.

*   Some properties on the local [Humanoid](https://developer.roblox.com/en-us/api-reference/class/Humanoid)
*   [Sound](https://developer.roblox.com/en-us/api-reference/class/Sound) playback, when [SoundService.RespectFilteringEnabled](https://developer.roblox.com/en-us/api-reference/property/SoundService/RespectFilteringEnabled) is set to false
*   [ClickDetector](https://developer.roblox.com/en-us/api-reference/class/ClickDetector) input events
*   [AnimationTrack](https://developer.roblox.com/en-us/api-reference/class/AnimationTrack) playback
*   Physics simulated on [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s which the client has `Articles/Network Ownership — Making physics smoother!|network ownership` of

Is FilteringEnabled more secure?
--------------------------------

Enabling FilteringEnabled is the best way of restricting exploiters from ruining your games. When it is enabled, with a few exceptions, changes made by clients will not replicate to the server (and therefore will not replicate to other clients). This means, if your game is properly designed, exploiters will find it much harder to operate in your game.

Enabling FilteringEnabled however, has implications on a game's design that developers must consider. Before using it, it is highly recommended developers familiarize themselves on the following topics:

*   `Articles/Experimental Mode|Experimental Mode` A brief introduction to the client-server model
*   `Articles/Building Games with Experimental Mode Off|Building games with Experimental Mode off` How to approach building a game with FilteringEnabled
*   [Converting Experimental Mode games](https://developer.roblox.com/articles/Converting-From-Experimental-Mode) Converting a game to use FilteringEnabled
*   [Game Security](https://developer.roblox.com/articles/Game-Security) How to use FilteringEnabled to improve the security of your game