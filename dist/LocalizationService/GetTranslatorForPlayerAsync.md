This function takes a player as an argument and yields until the cloud [LocalizationTable](https://developer.roblox.com/en-us/api-reference/class/LocalizationTable) for that player's locale has been loaded, if available. It then returns a [Translator](https://developer.roblox.com/en-us/api-reference/class/Translator) object which can be used to perform translations for that locale if any are available.  
The entries used for localization are the entries provided by the [LocalizationTable](https://developer.roblox.com/en-us/api-reference/class/LocalizationTable) hierarchy under [LocalizationService](https://developer.roblox.com/en-us/api-reference/class/LocalizationService) as well as the cloud table (if available). This will be the same set of entries returned by [GetTableEntries(nil)](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetTableEntries).

This function can error and thus should be wrapped in a [pcall](https://developer.roblox.com/en-us/articles/built-in-functions-&-variables-—-lua).

See also
--------

*   [LocalizationService:GetTranslatorForPlayer](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetTranslatorForPlayer), same functionality as this function except that it does not yield and does not wait until the cloud [LocalizationTable](https://developer.roblox.com/en-us/api-reference/class/LocalizationTable) for the player's locale has been loaded. This function is deprecated and should not be used in new work.
*   [LocalizationService:GetTranslatorForLocaleAsync](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetTranslatorForLocaleAsync), returns a Translator to be used for translations using the provided locale.