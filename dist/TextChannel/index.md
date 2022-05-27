Represents a text chat channel.

Contains [TextSource](https://create.roblox.com/docs/reference/engine/classes/TextSource)s as descendants.

To send a chat message to the [TextChannel](https://create.roblox.com/docs/reference/engine/classes/TextChannel), call `TextChannel:SendAsync` from
a [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript). The corresponding [TextSource](https://create.roblox.com/docs/reference/engine/classes/TextSource) of the user with
`TextSource.CanSend = true` must be in that channel.