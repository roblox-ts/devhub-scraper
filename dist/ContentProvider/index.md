Service that is used to load content, or assets, into a game.

The service's main use is to preload assets into a game. When a new asset such
as a [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal) or [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) is used in a game, Roblox will load the
content associated with it from Roblox servers. In some cases, this can be
undesirable for developers as it can lead to a delay before the content loads
into the game.

With ContentProvider, developers can preload assets using the
[`ContentProvider:PreloadAsync()`](https://create.roblox.com/docs/reference/engine/classes/ContentProvider#PreloadAsync) function. Another useful property is
[`ContentProvider.RequestQueueSize`](https://create.roblox.com/docs/reference/engine/classes/ContentProvider#RequestQueueSize), which can be used to measure what
proportion of assets in the request queue have been downloaded.