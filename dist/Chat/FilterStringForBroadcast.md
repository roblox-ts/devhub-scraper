Filters a string sent from _playerFrom_ for broadcast to no particular target. The filtered message has more restrictions than [Chat:FilterStringAsync](https://developer.roblox.com/en-us/api-reference/function/Chat/FilterStringAsync).

Some examples of where this method could be used:

*   \-Message walls
*   \-Cross-server shouts
*   \-User-created signs

Calling FilterString from [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript)s is deprecated and will be disabled in the future. Text filtering should be done from server-side [Script](https://developer.roblox.com/en-us/api-reference/class/Script)s using FilterStringAsync.

_Note:_ A game not using this filter function for custom chat or other user generated text may be subjected to moderation action.