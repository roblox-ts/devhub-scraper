Checks whether a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) owns a [badge](https://developer.roblox.com/en-us/articles/Badges-Special-Game-Awards) given their [UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) and the badge ID. This query can only be made under the following conditions:

*   This function must be called from a server-side [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or a [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) eventually required by a [Script](https://developer.roblox.com/en-us/api-reference/class/Script), not from a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).
*   The player in question must be present in the server.

Any badge for any game can be queried, no matter who created the badge or which game it is used for.

See also
--------

*   [BadgeService:GetBadgeInfoAsync()](https://developer.roblox.com/en-us/api-reference/function/BadgeService/GetBadgeInfoAsync)
*   [BadgeService:AwardBadge()](https://developer.roblox.com/en-us/api-reference/function/BadgeService/AwardBadge)