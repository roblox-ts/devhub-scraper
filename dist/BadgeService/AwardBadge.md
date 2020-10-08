**AwardBadge** grants a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) a [badge](https://developer.roblox.com/en-us/api-reference/class/articles/Badges Special Game Awards) given the player's [UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) and the badge ID. In order to successfully award a badge, the following criteria must be met:

*   The player must be presently connected to the game.
*   The player must not already have the badge (note that a player may delete an awarded badge from their profile and be awarded the badge again).
*   The badge must be awarded from a server-side [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or a [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) eventually required by a [Script](https://developer.roblox.com/en-us/api-reference/class/Script), not from a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).
*   The badge must be awarded in a place that is part of the game associated with the badge.
*   The owner of the place must also own the badge (for example, the owner must not have deleted the badge).
*   The badge must be enabled; check this using the `IsEnabled` property of the badge fetched via `BadgeService/GetBadgeInfoAsync|BadgeService:GetBadgeInfoAsync()`.

See also
--------

*   `BadgeService/GetBadgeInfoAsync|BadgeService:GetBadgeInfoAsync()`
*   `BadgeService/UserHasBadgeAsync|BadgeService:UserHasBadgeAsync()`