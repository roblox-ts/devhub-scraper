This function fetches information about a badge given its ID. It takes a
brief moment to load the information from the Roblox website; repeated
calls will cache for a short duration. It returns a dictionary with the
following fields:
| Key | Type | Description |
| - | - | - |
| **Name** | string | The name of the badge. |
| **Description** | string | The description of the badge. |
| **IconImageId** | int64 | The asset ID of the image for the badge. |
| **IsEnabled** | bool | Indicates whether the badge is available to be awarded. |

See also:

- [`BadgeService:AwardBadge()`](https://create.roblox.com/docs/reference/engine/classes/BadgeService#AwardBadge)
- [`BadgeService:UserHasBadgeAsync()`](https://create.roblox.com/docs/reference/engine/classes/BadgeService#UserHasBadgeAsync)