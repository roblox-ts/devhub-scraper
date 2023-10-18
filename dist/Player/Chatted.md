The Chatted event fires when a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) types a message and presses
enter in Roblox's provided chat bar. This is done using some Lua bindings
by the default chat script. You can prevent players from chatting by using
[`StarterGui:SetCoreGuiEnabled()`](https://create.roblox.com/docs/reference/engine/classes/StarterGui#SetCoreGuiEnabled) and disabling the Chat
[`Enum.CoreGuiType`](https://create.roblox.com/docs/reference/engine/enums/CoreGuiType).
#### Chat Commands

Using this event and some string manipulation functions like
`Library.string.sub()` and `Library.string.lower()`, it is possible to
create chat commands, even with arguments like player names. Usually,
commands are prefixed such as `heal PlayerName`. To check for a prefix in
a string, use `Library.string.sub()` on the message to check a substring
of the message: `string.sub(message, 1, 6) == "/heal "` (note the
inclusion of the space). Then, extract the rest of the command using
`Library.string.sub()` again: `string.sub(message, 7)` will be equal to
the player name. Check if that player exists, and if so, perform the
command's action (in this example, healing them). Check the code samples
for examples of chat commands.
#### Filtering

The message text fired with this event is **unfiltered**. If you are
displaying player input like chat to other players in any form, it must be
filtered using [`Chat:FilterStringAsync()`](https://create.roblox.com/docs/reference/engine/classes/Chat#FilterStringAsync). Keep this in mind when
creating your own chat systems; if your game does not properly filter chat
it may have moderation action taken against it.