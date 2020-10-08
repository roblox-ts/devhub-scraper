This function determines if a given badge is associated with the current game. It returns true if the badge is associated with the current game.

Badges can only be awarded from a place that is part of the game associated with the badge. This means, for example, a developer cannot award a badge associated with another developer's game.

Even if this returns true, a badge may still not be award-able. For example, it may be disabled. For more information on the criteria for awarding badges see [AwardBadge](https://developer.roblox.com/en-us/api-reference/function/BadgeService/AwardBadge).