If true, entering a message in the chat will result in a chat bubble popping up above the player's [Player.Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character). This behavior can either be enabled by directly ticking this checkbox in Studio, or by using a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript):

```lua
local ChatService = game:GetService("Chat")
ChatService.BubbleChatEnabled = true
``` 

This must be done on the client, toggling this value in a server-side [Script](https://developer.roblox.com/en-us/api-reference/class/Script) will have no effect.