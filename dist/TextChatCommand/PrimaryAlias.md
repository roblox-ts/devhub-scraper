A primary alias used to trigger the [`TextChatCommand`](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand).

If a user sends a message with [`TextChannel:SendAsync()`](https://create.roblox.com/docs/reference/engine/classes/TextChannel#SendAsync) that
matches "/{[`TextChatCommand.PrimaryAlias`](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand#PrimaryAlias)}", then the message is not
sent and instead [`TextChatCommand.Triggered`](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand#Triggered) is fired.