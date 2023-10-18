This function retrieves the value and metadata of a key from the data
store and updates it with a new value determined by the callback function
specified through the second parameter. If the callback returns `nil`, the
write operation is cancelled and the value remains unchanged.

If the update succeeds, a new version of the value will be created and
prior versions will remain accessible through
[`DataStore:ListVersionsAsync()`](https://create.roblox.com/docs/reference/engine/classes/DataStore#ListVersionsAsync) and
[`DataStore:GetVersionAsync()`](https://create.roblox.com/docs/reference/engine/classes/DataStore#GetVersionAsync).

[`OrderedDataStore`](https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore) does not support versioning, so calling this
function on an [`OrderedDataStore`](https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore) key will overwrite the current
value and make previous versions inaccessible.

In cases where another game server updated the key in the short timespan
between retrieving the key's current value and setting the key's value,
[`GlobalDataStore:UpdateAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#UpdateAsync) will call the function again to
ensure that no data is overwritten. The function will be called as many
times as needed until the data is saved **or** until the callback function
returns `nil`.

Any string being stored in a data store must be valid
`Library.utf8|UTF-8`. In UTF-8, values greater than 127 are used
exclusively for encoding multi-byte codepoints, so a single byte greater
than 127 will not be valid UTF-8 and the
[`GlobalDataStore:UpdateAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#UpdateAsync) attempt will fail.
#### Set vs. Update

[`GlobalDataStore:SetAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#SetAsync) is best for a quick update of a
specific key, and it only counts against the write limit. However, it may
cause data inconsistency if two servers attempt to set the same key at the
same time. [`GlobalDataStore:UpdateAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#UpdateAsync) is safer for handling
multi-server attempts because it reads the current key value (from
whatever server last updated it) before making any changes. However, it's
somewhat slower because it reads before it writes, and it also counts
against both the read and write limit.
#### Callback Function

The callback function accepts two arguments:

- Current value of the key prior to the update.
- [`DataStoreKeyInfo`](https://create.roblox.com/docs/reference/engine/classes/DataStoreKeyInfo) instance that contains the latest version
information (this argument can be ignored if metadata is not being
used).

In turn, the callback function returns up to three values:

- The new value to set for the key.
- An array of [`UserIds`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) to associate with the key.
[`DataStoreKeyInfo:GetUserIds()`](https://create.roblox.com/docs/reference/engine/classes/DataStoreKeyInfo#GetUserIds) should be returned unless the
existing IDs are being changed; otherwise all existing IDs will be
cleared.
- A Lua table containing metadata to associate with the key.
[`DataStoreKeyInfo:GetMetadata()`](https://create.roblox.com/docs/reference/engine/classes/DataStoreKeyInfo#GetMetadata) should be returned unless the
existing metadata is being changed; otherwise all existing metadata will
be cleared.

The callback function cannot yield, so do **not** include calls like
`wait()`.