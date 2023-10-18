This function marks the specified key as deleted by creating a new
"tombstone" version of the key. Prior to this, it returns the latest
version prior to the remove call.

After a key is removed via this function,
[`GlobalDataStore:GetAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#GetAsync) calls for the key will return `nil`.
Older versions of the key remain accessible through
[`DataStore:ListVersionsAsync()`](https://create.roblox.com/docs/reference/engine/classes/DataStore#ListVersionsAsync) and
[`DataStore:GetVersionAsync()`](https://create.roblox.com/docs/reference/engine/classes/DataStore#GetVersionAsync), assuming they have not expired.

[`OrderedDataStore`](https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore) does not support versioning, so calling
[`RemoveAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#RemoveAsync) on an
[`OrderedDataStore`](https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore) key will permanently delete it.

Removed objects will be deleted permanently after 30 days.

If the previous values were already deleted via
[`GlobalDataStore:RemoveAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#RemoveAsync) or
[`DataStore:RemoveVersionAsync()`](https://create.roblox.com/docs/reference/engine/classes/DataStore#RemoveVersionAsync), the function will return `nil`,
`nil` for value and [`DataStoreKeyInfo`](https://create.roblox.com/docs/reference/engine/classes/DataStoreKeyInfo) respectively.