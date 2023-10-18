This function takes a player as an argument and returns a
[`Translator`](https://create.roblox.com/docs/reference/engine/classes/Translator) instance which can be used to perform translations for
that locale if any are available. The entries used for localization are
the entries provided by the [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) hierarchy under
[`LocalizationService`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService) as well as the cloud
[`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable), if it is available and already loaded. This
will be the same set of entries returned by
[`LocalizationService.GetTableEntries(nil)`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService#GetTableEntries(nil)).

This function does not yield. It will not wait until the cloud
[`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) has loaded.

See also:

- [`LocalizationService:GetTranslatorForPlayerAsync()`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService#GetTranslatorForPlayerAsync) has the same
functionality as this function, except that it yields until the cloud
[`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) has been loaded.
- [`LocalizationService:GetTranslatorForLocaleAsync()`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService#GetTranslatorForLocaleAsync), returns a
Translator to be used for translations using the provided locale.