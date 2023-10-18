**Partial Deprecation Warning**: Calling this function from the client
using a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) is deprecated, and will be disabled in the
future. Text filtering should be done from a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) on the server
using the similarly-named [`TextService:FilterStringAsync()`](https://create.roblox.com/docs/reference/engine/classes/TextService#FilterStringAsync), which
uses a different set of parameters and return type.

Games that do not properly filter player-generated text might be subject
to moderation action. Please be sure a game properly filters text before
publishing it.

**FilterStringAsync** filters a string using filtering that is appropriate
for the sending and receiving player. If the filtered string is to be used
for a persistent message, such as the name of a shop, writing on a plaque,
etc, then the function should be called with the author as both the sender
and receiver.

This function should be used **every time** a player can enter custom text
in **any context**, most commonly using a [`TextBox`](https://create.roblox.com/docs/reference/engine/classes/TextBox). Some examples
of text to be filtered:

- Custom chat messages
- Custom character names
- Names for a shop in a tycoon-style game