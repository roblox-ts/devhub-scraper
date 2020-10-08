The SetSuperSafeChat [Player](https://developer.roblox.com/en-us/api-reference/class/Player) function sets whether or not the player sees chat filtered by [TextService](https://developer.roblox.com/en-us/api-reference/class/TextService)'s [TextService:FilterStringAsync](https://developer.roblox.com/en-us/api-reference/function/TextService/FilterStringAsync) rather than normal chats.

SuperSafeChat is a chat mode where player's cannot see unfiltered messages.

For example, entering the following command in the command prompt would enabled SuperSafeChat for the player named polarpanda16, as long as that player is in the game:

![Command prompt example enabling SuperSafeChat.](https://developer.roblox.com/assets/blte98afa1dbb206581/Screen_Shot_2018-07-28_at_9.46.09_PM.png)

##Note  
Regardless of whether a player has SuperSafeChat enabled, all chat should be filtered by TextService when broadcasted to other players or on the player's own screen. [TextService:FilterStringAsync](https://developer.roblox.com/en-us/api-reference/function/TextService/FilterStringAsync) returns a [TextFilterResult](https://developer.roblox.com/en-us/api-reference/class/TextFilterResult) object that can be filtered differently according to the message's intended use.