A [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) instance is a proxy of the document of a Studio
Script Editor. It's different from the [`LuaSourceContainer`](https://create.roblox.com/docs/reference/engine/classes/LuaSourceContainer) open in the
editor in that it represents the ephemeral state of an open document, and its
representation is in a format that's more suited for reading and editing code
than executing it. In particular, [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) reflects any changes
that have been made to the open script in Collaborative Editing, which the
source property doesn't.

The Script Editor itself exists and changes on a different thread than any
[`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel), so the [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) replicates the open Script
Editor, but it isn't the open editor. Because of the replication, there's
sometimes a slight delay between changing the text in the editor and updating
the [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument). The delay usually occurs because the
[`DataModel`](https://create.roblox.com/docs/reference/engine/classes/DataModel) is busy, and it's almost always extremely small, but it
still exists.

The existence of a [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) indicates that a document is open in
the Script Editor. All [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) instances have
[`ScriptEditorService`](https://create.roblox.com/docs/reference/engine/classes/ScriptEditorService) as its parent. Each instance adheres to the
following encoding conventions:

- All text in [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) is UTF-8 encoded.
- All line indices are 1-indexed.
- All character indices are 1-indexed and count UTF-8 bytes, not graphemes, so
the same warning from [`TextBox.CursorPosition`](https://create.roblox.com/docs/reference/engine/classes/TextBox#CursorPosition) applies: many Unicode
characters take more than one byte.
- All ranges are inclusive of their start position and exclusive of their end
position, so start == end implies an empty range.

All APIs for [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) are at **Plugin** level security.