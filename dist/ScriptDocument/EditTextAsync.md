Replaces the text in the specified range from (`startLine`, `startColumn`)
to (`endLine`, `endColumn`) with `newText`. If the range is empty, then
the function inserts the text at (`startLine`, `startColumn`). If the text
cursor is within the specified range, the cursor moves to the end position
of the edit. Otherwise, the text cursor doesn't move. This function yields
the current thread until it receives a reply from the editor about the
edit.

If the function succeeds, it returns (true, nil).

The function throws an error if:

- The range is invalid.
- The range would slice a unicode character (e.g., replacing only some of
the bytes of the unicode character).
- The `newText` itself contains invalid UTF-8.

If the function fails, it returns (false, string). The string is a
description of the problem. The most common failure type is a version
mismatch. This occurs when you try to call `EditTextAsync` during the time
when the [`ScriptDocument`](https://create.roblox.com/docs/reference/engine/classes/ScriptDocument) is out of sync with the contents of the
editor. If this happens, you can retry the edit.