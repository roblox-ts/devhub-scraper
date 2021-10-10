This function returns the latest value of the provided key and a [DataStoreKeyInfo](https://developer.roblox.com/en-us/api-reference/class/DataStoreKeyInfo) instance. If the key does not exist or if the latest version has been marked as deleted, both return values will be `nil`.

[OrderedDataStore](https://developer.roblox.com/en-us/api-reference/class/OrderedDataStore) does not support versioning and metadata, so [DataStoreKeyInfo](https://developer.roblox.com/en-us/api-reference/class/DataStoreKeyInfo) will always be `nil` for keys in an [OrderedDataStore](https://developer.roblox.com/en-us/api-reference/class/OrderedDataStore).

Keys are cached locally for 4 seconds after the first read. A [GlobalDataStore:GetAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/GetAsync) call within these 4 seconds returns a value from the cache. Modifications to the key by [GlobalDataStore:SetAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/SetAsync) or [GlobalDataStore:UpdateAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/UpdateAsync) apply to the cache immediately and restart the 4 second timer.

To get a specific version, such as a version before the latest, use [DataStore:GetVersionAsync](https://developer.roblox.com/en-us/api-reference/function/DataStore/GetVersionAsync).

See Also
--------

*   `Articles/Data store|Data Stores`, an in-depth guide on data structure, management, error handling, etc.