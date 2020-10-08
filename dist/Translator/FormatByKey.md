Returns the localized text string in a [LocalizationTable](https://developer.roblox.com/en-us/api-reference/class/LocalizationTable) based on its [Translator](https://developer.roblox.com/en-us/api-reference/class/Translator) locale, by key. The optional **args** table is used for filling format parameters in the matching text entry.

Note that this method will throw an error in the following cases:

*   If none of the [LocalizationTables](https://developer.roblox.com/en-us/api-reference/class/LocalizationTable) available to this [Translator](https://developer.roblox.com/en-us/api-reference/class/Translator) include a value for the given key.
*   If the `articles/localization format strings|format string` for the key uses numbered parameters and **args** is not an array.
*   If the `articles/localization format strings|format string` uses named parameters and **args** is not a table of key-value pairs.
*   If **args** is missing values for parameters that are used in the matching `articles/localization format strings|format string`.

See `articles/utilizing localization apis|Utilizing Localization APIs` for more details and usage examples of this function.