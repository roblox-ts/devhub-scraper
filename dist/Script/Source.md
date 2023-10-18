Represents the code to be executed. It's protected and discouraged for
editing directly. Attempting to access this property in a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script)
or [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) causes errors.

If you want to read or modify the source of a script that a user has open,
use [`ScriptEditorService`](https://create.roblox.com/docs/reference/engine/classes/ScriptEditorService) to interact with the
[Script Editor](https://create.roblox.com/docs/studio/script-editor) rather than directly
modifying this property. Both
[`ScriptEditorService:UpdateSourceAsync()`](https://create.roblox.com/docs/reference/engine/classes/ScriptEditorService#UpdateSourceAsync) and
[`ScriptEditorService:GetEditorSource()`](https://create.roblox.com/docs/reference/engine/classes/ScriptEditorService#GetEditorSource) can read or modify script
content from the script editor if the script is opened. You can also read
the source from the
[command line](https://create.roblox.com/docs/studio/ui-overview#command-bar).