This function takes a locale code as an argument and yields until the
cloud [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) for that locale has been loaded, if
available. It then returns a [`Translator`](https://create.roblox.com/docs/reference/engine/classes/Translator) object which can be used
to perform translations for that locale if any are available. The entries
used for localization are the entries provided by the
[`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) hierarchy under [`LocalizationService`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService) as
well as the cloud table (if available). This will be the same set of
entries returned by [`LocalizationService.GetTableEntries(nil)`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService#GetTableEntries(nil)).

This function can error and thus should be wrapped in a `pcall()`.

See also:

- [`LocalizationService:GetTranslatorForPlayer()`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService#GetTranslatorForPlayer) gets the translator
corresponding to the locale of the provided player. This function is
deprecated and should not be used in new work.
- [`LocalizationService:GetTranslatorForPlayerAsync()`](https://create.roblox.com/docs/reference/engine/classes/LocalizationService#GetTranslatorForPlayerAsync) yields until
the cloud [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) for the locale of the provided
player has loaded and then gets the translator corresponding to the
locale of the provided player.