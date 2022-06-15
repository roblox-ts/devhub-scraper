The PlayerChatted [Players](https://developer.roblox.com/en-us/api-reference/class/Players) event fires when a player chats.

The value of the [PlayerChatType](https://developer.roblox.com/en-us/api-reference/enum/PlayerChatType) determines the type of chat sent. There are three types of chat:

Type

Description

All

A global message that everyone can receive.

Team

A team message only players in the same team can receive.

Whisper

A whispered message only the person it's whispered to can receive. If the chat type is a Whisper Chat, the targetPlayer is the player being whispered to.

Note that this event is not intended for wide use and will not work in [Script](https://developer.roblox.com/en-us/api-reference/class/Script)s or [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)s.