This function takes a player as an argument and returns a [Translator](https://developer.roblox.com/en-us/api-reference/class/Translator) instance which can be used to perform translations for that locale if any are available. The entries used for localization are the entries provided by the [LocalizationTable](https://developer.roblox.com/en-us/api-reference/class/LocalizationTable) hierarchy under [LocalizationService](https://developer.roblox.com/en-us/api-reference/class/LocalizationService) as well as the cloud [LocalizationTable](https://developer.roblox.com/en-us/api-reference/class/LocalizationTable), if it is available and already loaded. This will be the same set of entries returned by `LocalizationService/GetTableEntries(nil)`.

This function does not yield. It will not wait until the cloud [LocalizationTable](https://developer.roblox.com/en-us/api-reference/class/LocalizationTable) has loaded.

See also
--------

*   [LocalizationService:GetTranslatorForPlayerAsync](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetTranslatorForPlayerAsync) has the same functionality as this function, except that it yields until the cloud [LocalizationTable](https://developer.roblox.com/en-us/api-reference/class/LocalizationTable) has been loaded.
*   [LocalizationService:GetTranslatorForLocaleAsync](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetTranslatorForLocaleAsync), returns a Translator to be used for translations using the provided locale.