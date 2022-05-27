LocalizationService is the service responsible for handling automated
translation.

It is used as a storage for [LocalizationTable](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable) objects used by automatic text
replacement.

LocalizationService will only use its child LocalizationTables for automatic
text replacement unless [GuiBase2d.RootLocalizationTable](https://create.roblox.com/docs/reference/engine/classes/GuiBase2d#RootLocalizationTable) is specified on a
GUI object or its ancestors.