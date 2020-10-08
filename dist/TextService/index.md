The TextService is a service internally responsible for handling the display of text in the game.

This class has two member functions,

The [TextService:GetTextSize](https://developer.roblox.com/en-us/api-reference/function/TextService/GetTextSize) function gives developers the ability to calculate the space required for a specific text string with specified formatting, returning a [Vector2](https://developer.roblox.com/en-us/api-reference/datatype/Vector2) pixel size.

The [TextService:FilterStringAsync](https://developer.roblox.com/en-us/api-reference/function/TextService/FilterStringAsync) function is required to properly filter user specified text (such as chat messages or other inputs) in the interests of user safety. Developers not using the Roblox default [Chat](https://developer.roblox.com/en-us/api-reference/class/Chat), or allowing users to otherwise input text must use this function.

For more information on text filtering please see [this article](http://robloxdev.com/articles/Text-and-Chat-Filtering).