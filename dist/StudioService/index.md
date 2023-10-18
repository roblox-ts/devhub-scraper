StudioService provides access to configuration of Roblox Studio, allows
importing files from the user's file system, and other miscellaneous
information. It is intended to be used by [`Plugin`](https://create.roblox.com/docs/reference/engine/classes/Plugin)s in order to provide
a consistent user experience.

- Plugins that allow the user to move objects may find
[`GridSize`](https://create.roblox.com/docs/reference/engine/classes/StudioService#GridSize),
[`RotateIncrement`](https://create.roblox.com/docs/reference/engine/classes/StudioService#RotateIncrement) and
[`UseLocalSpace`](https://create.roblox.com/docs/reference/engine/classes/StudioService#UseLocalSpace) useful.
- Plugins that require the user to import files should use
[`PromptImportFile`](https://create.roblox.com/docs/reference/engine/classes/StudioService#PromptImportFile) or
[`PromptImportFiles`](https://create.roblox.com/docs/reference/engine/classes/StudioService#PromptImportFiles) in order to
receive [`File`](https://create.roblox.com/docs/reference/engine/classes/File) objects.
- Plugins that display icons of Instance classes can use
[`GetClassIcon`](https://create.roblox.com/docs/reference/engine/classes/StudioService#GetClassIcon).
- Plugins that care about which script is currently being edited (if any) can
read this from [`ActiveScript`](https://create.roblox.com/docs/reference/engine/classes/StudioService#ActiveScript).