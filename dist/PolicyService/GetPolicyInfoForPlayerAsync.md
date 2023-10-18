Returns policy information about a player which is based on geolocation,
age group, and platform. The structure of the returned dictionary is as
follows:
| Name | Type | Required for | Description |
| - | - | - | - |
| AreAdsAllowed | Boolean | Any experience that includes immersive ads | When true, the player might see immersive ads within an experience. |
| ArePaidRandomItemsRestricted | Boolean | Any experience that has paid random items | When true, the player cannot interact with paid (via in-experience currency or Robux) random item generators. |
| AllowedExternalLinkReferences | Array of strings | Any experience that references external links | A list of external link references (for example, social media links, handles, or iconography) a player is permitted to see. Possible values include: "Discord", "Facebook", "Twitch", and "YouTube". |
| IsPaidItemTradingAllowed | Boolean | Any experience that allows users to purchase virtual items that they can trade with other players | When true, the player can trade virtual items that they purchased with in-experience currency or Robux. |
| IsSubjectToChinaPolicies | Boolean | Any experience that is available in China | When true, an experience should enforce compliance changes. See [this forum post](https://create.roblox.com/docs/https://devforum.roblox.com/t/new-programs-available-roblox-china-licensed-to-operate/1023361) for more information. |

#### Exceptions

Like any async call, this needs to be wrapped in a `pcall` and
error-handled properly. A full list of possible error messages and their
reasons is as below:
| Message | Reason |
| - | - |
| Instance was not a player | Dev's usage - The parameter is not a Player instance |
| Players not found | Internal error - Players object missing |
| This method cannot be called on the client for a non-local player | Dev's usage - This method cannot be called on the client for a non-local player |
| GetPolicyInfoForPlayerAsync is called too many times | Internal error - GetPolicyInfoForPlayerAsync is called more than 100(current setting) times before http response coming back |

See also:

- [`LocalizationService:GetCountryRegionForPlayerAsync()`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService#GetCountryRegionForPlayerAsync), returns
country/region code string according to player's client IP geolocation