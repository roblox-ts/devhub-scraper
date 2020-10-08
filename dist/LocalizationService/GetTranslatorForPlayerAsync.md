This function takes a player as an argument and yields until the cloud localization data for that player's locale has been loaded, and then returns a [Translator](https://developer.roblox.com/en-us/api-reference/class/Translator) object which can be used to perform translations for that locale if any are available.

This function can error and thus should be wrapped in a pcall.

See also
--------

*   [LocalizationService:GetTranslatorForPlayer](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetTranslatorForPlayer), same functionality as this function except that it does not yield and will only return data for embedded localization tables. It won't include any data from web-based tables.
*   [LocalizationService:GetTranslatorForLocaleAsync](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetTranslatorForLocaleAsync), returns a Translator to be used for translations using the locale data loaded