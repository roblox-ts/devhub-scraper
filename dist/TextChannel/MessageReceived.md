Only fired on the receiving client when the server receives a
[`TextChannel:SendAsync()`](https://create.roblox.com/docs/reference/engine/classes/TextChannel#SendAsync) response or invokes
[`TextChannel:DisplaySystemMessage()`](https://create.roblox.com/docs/reference/engine/classes/TextChannel#DisplaySystemMessage).

Use [`TextChatMessage`](https://create.roblox.com/docs/reference/engine/classes/TextChatMessage) parameter to get the [`TextSource`](https://create.roblox.com/docs/reference/engine/classes/TextSource) and
the text of the message (with [`TextChatMessage.Text`](https://create.roblox.com/docs/reference/engine/classes/TextChatMessage#Text)).

The [`TextChatMessage`](https://create.roblox.com/docs/reference/engine/classes/TextChatMessage) parameter can be mutated by any functions
bound to [`TextChatMessage.OnIncomingMessage`](https://create.roblox.com/docs/reference/engine/classes/TextChatMessage#OnIncomingMessage) and
[`TextChannel.OnIncomingMessage`](https://create.roblox.com/docs/reference/engine/classes/TextChannel#OnIncomingMessage).