A general purpose field for storing miscellaneous data about the
[`TextChatMessage`](https://create.roblox.com/docs/reference/engine/classes/TextChatMessage). The second argument of
[`TextChannel:SendAsync()`](https://create.roblox.com/docs/reference/engine/classes/TextChannel#SendAsync) and
[`TextChannel:DisplaySystemMessage()`](https://create.roblox.com/docs/reference/engine/classes/TextChannel#DisplaySystemMessage) is used to populate this field.

If [`TextChatService.CreateDefaultTextChannels`](https://create.roblox.com/docs/reference/engine/classes/TextChatService#CreateDefaultTextChannels) is `true`, default
system messages sent to the system channel have unique
[`TextChatMessage.Metadata`](https://create.roblox.com/docs/reference/engine/classes/TextChatMessage#Metadata) values.

Use this field to apply additional formatting for special messages within
[`TextChatService.OnIncomingMessage`](https://create.roblox.com/docs/reference/engine/classes/TextChatService#OnIncomingMessage) and
[`TextChannel.OnIncomingMessage`](https://create.roblox.com/docs/reference/engine/classes/TextChannel#OnIncomingMessage) callbacks.