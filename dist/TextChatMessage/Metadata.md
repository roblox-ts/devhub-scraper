A general purpose field for storing miscellaneous data about the
[TextChatMessage](https://create.roblox.com/docs/reference/engine/classes/TextChatMessage). The second argument of `TextChannel:SendAsync` and
`TextChannel:DisplaySystemMessage` is used to populate this field.

If `TextChatService.CreateDefaultTextChannels` is `true`, default system
messages sent to the system channel have unique `TextChatMessage.Metadata`
values.

Use this field to apply additional formatting for special messages within
`TextChatService.OnIncomingMessage` and `TextChannel.OnIncomingMessage`
callbacks.