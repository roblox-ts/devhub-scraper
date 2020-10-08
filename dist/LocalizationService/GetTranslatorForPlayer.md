This function takes a player as an argument returns cloud localization data for that `Player|player's` locale has been loaded, and then returns a [Translator](https://developer.roblox.com/en-us/api-reference/class/Translator) object which can be used to perform translations for that locale if any are available.

It will only return data for embedded localization tables, and won't include any data from web-based tables.

See also
--------

*   [LocalizationService:GetTranslatorForPlayerAsync](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetTranslatorForPlayerAsync), same functionality as this function except that it yields until the translator has been loaded and includes data from web-based tables
*   [LocalizationService:GetTranslatorForLocaleAsync](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetTranslatorForLocaleAsync), returns a Translator to be used for translations using the locale data loaded