An event that developers can bind to execute commands.

When a user sends a message to the server via
[`TextChannel:SendAsync()`](https://create.roblox.com/docs/reference/engine/classes/TextChannel#SendAsync), the message is intercepted by the
[`TextChatCommand`](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand) and not replicated to other users if the content
of the message matches "/{[`TextChatCommand.PrimaryAlias`](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand#PrimaryAlias)}" or
"/{[`TextChatCommand.SecondaryAlias`](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand#SecondaryAlias)}".

For example, for a [`TextChatCommand`](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand) with
[`TextChatCommand.PrimaryAlias`](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand#PrimaryAlias) as "mute", if a user sends "/mute
SomeUserName", then the relevant [`TextChatCommand`](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand) for mute will
fire its [`TextChatCommand.Triggered`](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand#Triggered). The message "/mute
SomeUserName" is not replicated to other users.