The GetEntries function returns an array of dictionaries contained in a
given [`LocalizationTable`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable), where each dictionary represents an entry
of localization data.

To set the entries of a LocalizationTable, you can use
[`LocalizationTable:SetEntries()`](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable#SetEntries).

Each dictionary in the array contains the following fields:
| Index | Type | Description |
| - | - | - |
| **Key** | `Library.string` | A lookup key for this specific entry in the LocalizationTable. |
| **Source** | `Library.string` | The string used to format the localized string. Used as a lookup if a key is not provided. |
| **Context** | `Library.string` | An [`Instance:GetFullName()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetFullName) path to the object that was used to generate the LocalizationTable. Used as a lookup if a key is not provided. |
| **Example** | `Library.string` | The string used to format the localization. Optional. |
| **Values** | `Library.string` | A dictionary of language translations for this localization entry. The keys of this dictionary are locale ids, and the values are strings that are used to apply localization for the language corresponding to the locale id. |