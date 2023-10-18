Returns the localized text string in a [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) based on
its [`Translator`](https://create.roblox.com/docs/reference/engine/classes/Translator) locale, by key. The optional **args** table is used
for filling format parameters in the matching text entry.

Note that this method will throw an error in the following cases:

- If none of the [`LocalizationTables`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) available to
this [`Translator`](https://create.roblox.com/docs/reference/engine/classes/Translator) include a value for the given key.
- If the
[format string](https://create.roblox.com/docs/production/localization/translating-dynamic-content)
for the key uses numbered parameters and **args** is not an array.
- If the
[format string](https://create.roblox.com/docs/production/localization/translating-dynamic-content)
uses named parameters and **args** is not a table of key-value pairs.
- If **args** is missing values for parameters that are used in the
matching
[format string](https://create.roblox.com/docs/production/localization/translating-dynamic-content).

See
[Localizing with Scripting](https://create.roblox.com/docs/production/localization/localizing-with-scripting)
for more details and usage examples of this function.