This method begins a recording to track changes to the data model. You
**must** call it prior to making changes to avoid future warnings or
errors.

When the recording is completed, you call
[`FinishRecording()`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService#FinishRecording()) with the
returned recording identifier to complete the recording and update the
undo/redo stack.

If the plugin already has a recording in progress, this method will fail
and return `nil`.

You may use
[`IsRecordingInProgress()`](https://create.roblox.com/docs/reference/engine/classes/ChangeHistoryService#IsRecordingInProgress())
to check the recording status of the plugin.