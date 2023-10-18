This function sets the latest value, [`UserIds`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId), and
metadata for the given key.

Values in data stores are versioned, meaning
[`GlobalDataStore:SetAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#SetAsync) will create a new version every time it
is called. Prior versions can be accessed through
[`DataStore:ListVersionsAsync()`](https://create.roblox.com/docs/reference/engine/classes/DataStore#ListVersionsAsync)/[`DataStore:GetVersionAsync()`](https://create.roblox.com/docs/reference/engine/classes/DataStore#GetVersionAsync)
for up to 30 days at which point they are permanently deleted.

[`OrderedDataStore`](https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore) does not support versioning, so calling this
method on an [`OrderedDataStore`](https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore) key will overwrite the current value
and make previous versions inaccessible.

Metadata definitions must always be updated with a value, even if there
are no changes to the current value; otherwise the current value will be
lost.

Any string being stored in a data store must be valid
`Library.utf8|UTF-8`. In UTF-8, values greater than 127 are used
exclusively for encoding multi-byte codepoints, so a single byte greater
than 127 will not be valid UTF-8 and the
[`GlobalDataStore:SetAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#SetAsync) attempt will fail.
#### Set vs. Update

[`GlobalDataStore:SetAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#SetAsync) is best for a quick update of a
specific key, and it only counts against the write limit. However, it may
cause data inconsistency if two servers attempt to set the same key at the
same time. [`GlobalDataStore:UpdateAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#UpdateAsync) is safer for handling
multi-server attempts because it reads the current key value (from
whatever server last updated it) before making any changes. However, it's
somewhat slower because it reads before it writes, and it also counts
against both the read and write limit.