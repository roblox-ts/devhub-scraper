The **RespectFilteringEnabled** property determines whether [Sound](https://create.roblox.com/docs/reference/engine/classes/Sound)
playback is replicated from the client to the server, and therefore from
server . In other words, when a [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) calls [Sound:Play](https://create.roblox.com/docs/reference/engine/classes/Sound#Play) and this
property is **true**, the sound will only play on the respective client.
If the property is false, other clients will also hear the sound.