This function returns whether the badge with the given id is marked **disabled** on the Roblox website. A badge can be disabled by its owner on its page on the Roblox website, in the settings sub-menu. When a badge is disabled, this function returns true and the badge can no longer be awarded using [AwardBadge](https://developer.roblox.com/en-us/api-reference/function/BadgeService/AwardBadge). A badge may be quickly re-enabled through the same menu.

![A dropdown with an option to disable the badge](https://developer.roblox.com/assets/blt5e1268540f15ff26/DisableBadge.png)

In Studio, a badge can only be tested if it is **disabled**. Calling this function with an enabled badge in Studio will return **true** and produce a warning “Sorry, badges can only be tested if they are disabled on Roblox game servers”.

Note that even if a badge is enabled it may not necessarily be awardable (for example if it isn't associated with the current game). See [AwardBadge](https://developer.roblox.com/en-us/api-reference/function/BadgeService/AwardBadge) for more information on the criteria required for awarding badges.

Badges that are associated with special events are a common reason for a badge to be disabled. Often, it is easier to simply disable a badge instead of hard-coding a time check for when some event ends.