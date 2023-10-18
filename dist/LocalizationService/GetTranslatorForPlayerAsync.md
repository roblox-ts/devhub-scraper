This function takes a player as an argument and yields until the cloud
[`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) for that player's locale has been loaded, if
available. It then returns a [`Translator`](https://create.roblox.com/docs/reference/engine/classes/Translator) object which can be used
to perform translations for that locale if any are available. The entries
used for localization are the entries provided by the
[`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) hierarchy under [`LocalizationService`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService) as
well as the cloud table (if available). This will be the same set of
entries returned by
[`GetTableEntries(nil)`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService#GetTableEntries).

This function can error and thus should be wrapped in a `pcall()`.

See also:

- [`LocalizationService:GetTranslatorForPlayer()`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService#GetTranslatorForPlayer), same functionality
as this function except that it does not yield and does not wait until
the cloud [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) for the player's locale has been
loaded. This function is deprecated and should not be used in new work.
- [`LocalizationService:GetTranslatorForLocaleAsync()`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService#GetTranslatorForLocaleAsync), returns a
Translator to be used for translations using the provided locale.