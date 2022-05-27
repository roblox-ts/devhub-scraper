If true, entering a message in the chat will result in a chat bubble
popping up above the player's [Player.Character](https://create.roblox.com/docs/reference/engine/classes/Player#Character). This behavior can either
be enabled by directly ticking this checkbox in Studio, or by using a
[LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript):

```lua
local ChatService = game:GetService("Chat")
ChatService.BubbleChatEnabled = true
```

This must be done on the client, toggling this value in a server-side
`Script` will have no effect.