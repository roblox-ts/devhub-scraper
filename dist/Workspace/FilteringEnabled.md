**Warning:** Experimental Mode has been discontinued, meaning this
property will no longer take effect.

Determines whether changes made from the client will replicate to the
server or not. When this property is disabled, the game is in
'Experimental Mode'.

This property is not replicated, meaning it cannot be changed once the
game has started. For this reason, developers should only set this
property in Roblox Studio.

#### What does FilteringEnabled do?

When FilteringEnabled is disabled, the place is in 'Experimental Mode'. In
'Experimental Mode', changes made to the game on the client replicate back
to the server. For some, this makes games simpler to make, but means
exploiters can change nearly anything in the game (such as deleting the
baseplate).

When FilteringEnabled is enabled, everything continues to replicate from
the server to the client (with a few exceptions such as [ServerStorage](https://create.roblox.com/docs/reference/engine/classes/ServerStorage)
and `ServerScriptStorage`). However, actions made by the client will no
longer freely replicate to the server. Instead, [RemoteEvent](https://create.roblox.com/docs/reference/engine/classes/RemoteEvent)s and
[RemoteFunction](https://create.roblox.com/docs/reference/engine/classes/RemoteFunction)s need to be used by the client to 'request' the server
preforms certain actions on its behalf.

#### What are the exceptions to FilteringEnabled?

Whilst FilteringEnabled prevents almost everything from replicating from
the client to the server, there are some exceptions.

- Some properties on the local [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
- [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound) playback, when [SoundService.RespectFilteringEnabled](https://create.roblox.com/docs/reference/engine/classes/SoundService#RespectFilteringEnabled) is set to
  false
- [ClickDetector](https://create.roblox.com/docs/reference/engine/classes/ClickDetector) input events
- [AnimationTrack](https://create.roblox.com/docs/reference/engine/classes/AnimationTrack) playback
- Physics simulated on [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)s which the client has network ownership.

#### Is FilteringEnabled more secure?

Enabling FilteringEnabled is the best way of restricting exploiters from
ruining your games. When it is enabled, with a few exceptions, changes
made by clients will not replicate to the server (and therefore will not
replicate to other clients). This means, if your game is properly
designed, exploiters will find it much harder to operate in your game.

Enabling FilteringEnabled however, has implications on a game's design
that developers must consider. Before using it, it is highly recommended
developers familiarize themselves on the following topics:

- [Converting Experimental Mode games][4] Converting a game to use
  FilteringEnabled
- [Game Security][5] How to use FilteringEnabled to improve the security
  of your game

[1]: https://developer.roblox.com/articles/Network-Ownership
[2]: https://developer.roblox.com/articles/Experimental-Mode
[3]:
  https://developer.roblox.com/articles/Building-Games-with-Experimental-Mode-Off
[4]:
  https://developer.roblox.com/articles/Converting-From-Experimental-Mode
[5]: https://developer.roblox.com/articles/Game-Security