Returns the edit-time source for the given script.

If the script is open in the
[Script Editor](https://create.roblox.com/docs/studio/script-editor), this method returns the
text currently being displayed in the editor. If the script is not open in
the editor, the method returns the text that the editor would display if
it's opened. The edit-time source is not always be consistent with the
[`Script.Source`](https://create.roblox.com/docs/reference/engine/classes/Script#Source) property.

For example, in the
[Team Create Collaborative Scripting](https://create.roblox.com/docs/projects/collaboration#collaborative-scripting)
mode, this method returns the contents of a local draft created from the
script, if there's an exsiting one.