Plugin developers **must** use [`ChangeHistoryService`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService) to tell Studio how
to undo and redo changes that their plugins make to experiences by recording.
Before making changes, a plugin calls
[`ChangeHistoryService:TryBeginRecording()`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService#TryBeginRecording), remembering the identifier
it assigns, then after making changes, the Plugin calls
[`ChangeHistoryService:FinishRecording()`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService#FinishRecording) to complete the recording.

Plugins may also programmatically invoke an undo or redo through
[`ChangeHistoryService:Undo()`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService#Undo) or [`ChangeHistoryService:Redo()`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService#Redo).

[`ChangeHistoryService`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService) is not enabled at runtime, so calling its methods
in a running experience has no effect.