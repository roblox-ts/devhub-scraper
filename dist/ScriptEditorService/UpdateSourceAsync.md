Returns the edit-time [`Script.Source`](https://create.roblox.com/docs/reference/engine/classes/Script#Source) for the given script.

This function calls the passed callback using the old contents of the
script to calculate the new contents of the script.

If the script is open in the
[Script Editor](https://create.roblox.com/docs/studio/script-editor), then it issues a
request to the editor to update its source. The editor may reject this
update if the [`Script.Source`](https://create.roblox.com/docs/reference/engine/classes/Script#Source) property was out of date with the
user's version of the script when this function was called, in which case
the callback will be re-invoked and the attempt will be repeated.

The callback may not yield. If the callback returns `nil`, the operation
is cancelled. This function yields until the operation is cancelled or
succeeds.

If the script is not open in the editor, the new content updates to the
script source, which is the text the editor would display if it is opened.
```lua
local ses = game:GetService('ScriptEditorService')
ses:UpdateSourceAsync(Workspace.Script, function(oldContent)
  return oldContent .. " World!"
end)
```