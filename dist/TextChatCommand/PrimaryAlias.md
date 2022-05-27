A primary alias used to trigger the [TextChatCommand](https://create.roblox.com/docs/reference/engine/classes/TextChatCommand).

If a user sends a message with `TextChannel:SendAsync` that matches
"/{`TextChatCommand.PrimaryAlias`}", then the message is not sent and
instead `TextChatCommand.Triggered` is fired.