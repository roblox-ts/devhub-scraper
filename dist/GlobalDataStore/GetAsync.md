This function returns the latest value of the provided key and a
[`DataStoreKeyInfo`](https://create.roblox.com/docs/reference/engine/classes/DataStoreKeyInfo) instance. If the key does not exist or if the
latest version has been marked as deleted, both return values will be
`nil`.

[`OrderedDataStore`](https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore) does not support versioning and metadata, so
[`DataStoreKeyInfo`](https://create.roblox.com/docs/reference/engine/classes/DataStoreKeyInfo) will always be `nil` for keys in an
[`OrderedDataStore`](https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore).

Keys are cached locally for 4 seconds after the first read. A
[`GlobalDataStore:GetAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#GetAsync) call within these 4 seconds returns a
value from the cache. Modifications to the key by
[`GlobalDataStore:SetAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#SetAsync) or
[`GlobalDataStore:UpdateAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#UpdateAsync) apply to the cache immediately and
restart the 4 second timer.

To get a specific version, such as a version before the latest, use
[`DataStore:GetVersionAsync()`](https://create.roblox.com/docs/reference/engine/classes/DataStore#GetVersionAsync).