**This class is being deprecated. Use [`TextChatService`](https://create.roblox.com/docs/reference/engine/classes/TextChatService) instead.**

The **Chat** service houses the Lua code responsible for running the Lua Chat
System. Similar to [`StarterPlayerScripts`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayerScripts), default objects like
[`Scripts`](https://create.roblox.com/docs/reference/engine/classes/Script) and [`ModuleScripts`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) are inserted
into the service.

In addition to housing the Lua Chat System, this service also exposes
functions used to filter text:
[`FilterStringAsync()`](https://create.roblox.com/docs/reference/engine/classes/Chat#FilterStringAsync) and
[`FilterStringForBroadcast()`](https://create.roblox.com/docs/reference/engine/classes/Chat#FilterStringForBroadcast). Note that
games which implement custom chat systems must use these functions to filter
chat properly. See Text and Chat Filtering for more information.