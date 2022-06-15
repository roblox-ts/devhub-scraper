**Partial Deprecation Warning**  
Calling this function from the client using a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) is deprecated, and will be disabled in the future. Text filtering should be done from a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) on the server using the similarly-named [TextService:FilterStringAsync](https://developer.roblox.com/en-us/api-reference/function/TextService/FilterStringAsync), which uses a different set of parameters and return type.

Games that do not properly filter player-generated text maybe subject to moderation action. Please be sure a game properly filters text before publishing it.

**FilterStringAsyc** will filter a [string](https://developer.roblox.com/en-us/articles/string) using filtering that is appropriate for the sending and receiving player. If the filtered string is to be used for a persistent message, such as the name of a shop, writing on a plaque, etc, then the function should be called with the author as both the sender and receiver.

This function should be used **every time** a player can enter custom text in **any context**, most commonly using a [TextBox](https://developer.roblox.com/en-us/api-reference/class/TextBox). Some examples of text to be filtered:

*   Custom chat messages
*   Custom character names
*   Names for a shop in a tycoon-style game