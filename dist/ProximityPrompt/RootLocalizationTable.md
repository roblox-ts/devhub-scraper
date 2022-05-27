This property serves as a reference to the [LocalizationTable](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) used to
apply automated localization to the ProximityPrompt's
[ProximityPrompt.ActionText](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#ActionText) and [ProximityPrompt.ObjectText](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#ObjectText). In order
for this to appy, [ProximityPrompt.AutoLocalize](https://create.roblox.com/docs/reference/engine/classes/ProximityPrompt#AutoLocalize) must be set.

Developers can set this to reference a LocalizationTable anywhere in the
[DataModel](https://create.roblox.com/docs/reference/engine/classes/DataModel). It is not required to be a child of [LocalizationService](https://create.roblox.com/docs/reference/engine/classes/LocalizationService). If
there is no translation available in the referenced table it will look for
a translation in the parent of that table, if it is also a
LocalizationTable, and so on.