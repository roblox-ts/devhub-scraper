Only fired on the receiving client. when [`TextChannel:SendAsync()`](https://create.roblox.com/docs/reference/engine/classes/TextChannel#SendAsync)
response is received by the server or
[`TextChannel:DisplaySystemMessage()`](https://create.roblox.com/docs/reference/engine/classes/TextChannel#DisplaySystemMessage) is invoked.

Use [`TextChatMessage`](https://create.roblox.com/docs/reference/engine/classes/TextChatMessage) parameter to get the [`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource) and
the text of the message (with [`TextChatMessage.Text`](https://create.roblox.com/docs/reference/engine/classes/TextChatMessage#Text)).

The [`TextChatMessage`](https://create.roblox.com/docs/reference/engine/classes/TextChatMessage) parameter is the final result of any functions
bound to [`TextChatMessage.OnIncomingMessage`](https://create.roblox.com/docs/reference/engine/classes/TextChatMessage#OnIncomingMessage).