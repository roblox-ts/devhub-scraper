When set to true, player's chat messages will appear above their in-game avatar. The default value is false.

To enable BubbleChat without forking [Chat](https://developer.roblox.com/en-us/api-reference/class/Chat), developers only need to add a few lines of code inside of a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) in [ReplicatedFirst](https://developer.roblox.com/en-us/api-reference/class/ReplicatedFirst).

```lua
local ChatService = game:GetService("Chat") -- Call ChatService
ChatService:RegisterChatCallback(Enum.ChatCallbackType.OnCreatingChatWindow, function()
	return {BubbleChatEnabled = true} -- Call the API to change its boolean value to true
end)
```