Returns policy information about a player which is based on geolocation, age group, and platform. The structure of the returned dictionary is as follows:

Name

Type

Description

ArePaidRandomItemsRestricted

Boolean

Whether the player can interact with paid random item generators.

IsSubjectToChinaPolicies

Boolean

See [here](https://devforum.roblox.com/t/about-our-upcoming-global-compliance-system/461447) for details.

AllowedExternalLinkReferences

Array of strings

Which external link references are allowed in a country/region.

IsPaidItemTradingAllowed

Boolean

Whether the player can trade virtual items that were purchased with in-game or real-world currency.

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