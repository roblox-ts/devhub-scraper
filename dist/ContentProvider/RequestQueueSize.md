Gives the number of items in [`ContentProvider`](https://create.roblox.com/docs/reference/engine/classes/ContentProvider)'s request queue that
need to be downloaded.

Items are added to the client's request queue when an asset is used for
the first time or [`ContentProvider:PreloadAsync()`](https://create.roblox.com/docs/reference/engine/classes/ContentProvider#PreloadAsync) is called.

Developers are advised not to use RequestQueueSize to create loading bars.
This is because the queue size can both increase and decrease over time as
new assets are added and downloaded. Developers looking to display loading
progress should load assets one at a time (see example below).