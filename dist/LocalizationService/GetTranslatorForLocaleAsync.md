This function takes a language code as an argument and yields until the cloud localization data for that locale has been loaded, and then returns a [Translator](https://developer.roblox.com/en-us/api-reference/class/Translator) object which can be used to perform translations for that locale if any are available.

This function can error and thus should be wrapped in a [pcall](https://developer.roblox.com/en-us/articles/Built-in-Functions-&-Variables-—-Lua).

See also
--------

*   [LocalizationService:GetTranslatorForPlayer](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetTranslatorForPlayer), same functionality as this function except that it does not yield
*   [LocalizationService:GetTranslatorForPlayerAsync](https://developer.roblox.com/en-us/api-reference/function/LocalizationService/GetTranslatorForPlayerAsync), same functionality as this function except that it yields until the translator has been loaded