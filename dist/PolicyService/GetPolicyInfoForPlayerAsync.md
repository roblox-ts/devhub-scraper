Returns policy information about a player which is based on geolocation, age group, and platform. The structure of the returned dictionary is as follows:

Name

Type

Required for

Description

ArePaidRandomItemsRestricted

Boolean

Any experience that has paid random items

Whether the player can interact with paid (via in-experience currency or Robux) random item generators.

AllowedExternalLinkReferences

Array of strings

Any experience that references external links

Whether a player can see any external link reference (for example, social media links, handles, or iconography). Possible values include: “Discord”, “Facebook”, “Twitch”, and “YouTube”.

IsPaidItemTradingAllowed

Boolean

Any experience that allows users to purchase virtual items that they can trade with other players

Whether the player can trade virtual items that they purchased with in-experience currency or Robux.

IsSubjectToChinaPolicies

Boolean

Any experience that is available in China

Whether an experience should enforce compliance changes. See [this developer forum post](https://devforum.roblox.com/t/new-programs-available-roblox-china-licensed-to-operate/1023361) for more information.

Exceptions
----------

Like any async call, this needs to be wrapped in a `pcall` and error-handled properly. A full list of possible error messages and their reasons is as below:

Message

Reason

Instance was not a player

Dev's usage - The parameter is not a Player instance

Players not found

Internal error - Players object missing

This method cannot be called on the client for a non-local player

Dev's usage - This method cannot be called on the client for a non-local player

GetPolicyInfoForPlayerAsync is called too many times

Internal error - GetPolicyInfoForPlayerAsync is called more than 100(current setting) times before http response coming back

See also
--------

*   [LocalizationService:GetCountryRegionForPlayerAsync](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetCountryRegionForPlayerAsync), returns country/region code string according to player's client IP geolocation