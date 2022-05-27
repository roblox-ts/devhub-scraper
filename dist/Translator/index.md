The role of a Translator is to manufacture/return strings localized for the
viewing player. it can be used to retrieve display-ready localized text from a
[LocalizationTable](https://create.roblox.com/docs/reference/engine/classes/LocalizationTable). The source of the [Translator.LocaleId](https://create.roblox.com/docs/reference/engine/classes/Translator#LocaleId) property, the set
of tables it will search, and the order it will search them in depends on
which method was used to create the Translator instance.

The input for a Translator is the original development language string and a
context, where all or part of the context can be used to find a more
precise/situational translation for the source string.

The Translator can also be used to manufacture translated strings with inserts
(data replacements) which may change order based on the target language.