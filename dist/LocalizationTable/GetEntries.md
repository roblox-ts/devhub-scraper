The GetEntries function returns an array of dictionaries contained in a given `/LocalizationTable`, where each dictionary represents an entry of localization data.

To set the entries of a LocalizationTable, you can use [LocalizationTable:SetEntries](https://developer.roblox.com/en-us/api-reference/function/LocalizationTable/SetEntries).

Each dictionary in the array contains the following fields:

Index

Type

Description

### Key

[string](https://developer.roblox.com/api-reference/lua-docs/string)

A lookup key for this specific entry in the LocalizationTable.

### Source

[string](https://developer.roblox.com/api-reference/lua-docs/string)

The string used to format the localized string. Used as a lookup if a Key is not provided.

### Context

[string](https://developer.roblox.com/api-reference/lua-docs/string)

An \`Instance/GetFullName\` path to the object that was used to generate the LocalizationTable. Used as a lookup if a Key is not provided.

### Example

[string](https://developer.roblox.com/api-reference/lua-docs/string)

The string used to format the localization. Optional.

### Values

[string](https://developer.roblox.com/api-reference/lua-docs/string)

A dictionary of language translations for this localization entry. The keys of this dictionary are locale ids, and the values are strings that are used to apply localization for the language corresponding to the locale id.