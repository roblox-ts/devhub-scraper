This function marks the specified key as deleted by creating a new “tombstone” version of the key. Prior to this, it returns the latest version prior to the remove call.

After a key is removed via this function, [GlobalDataStore:GetAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/GetAsync) calls for the key will return `nil`. Older versions of the key remain accessible through [DataStore:ListVersionsAsync](https://developer.roblox.com/en-us/api-reference/function/DataStore/ListVersionsAsync) and [DataStore:GetVersionAsync](https://developer.roblox.com/en-us/api-reference/function/DataStore/GetVersionAsync), assuming they have not expired.

[OrderedDataStore](https://developer.roblox.com/en-us/api-reference/class/OrderedDataStore) does not support versioning, so calling [RemoveAsync()](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/RemoveAsync) on an [OrderedDataStore](https://developer.roblox.com/en-us/api-reference/class/OrderedDataStore) key will permanently delete it.

Removed objects will be deleted permanently after 30 days.

If the previous values were already deleted via [GlobalDataStore:RemoveAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/RemoveAsync) or [DataStore:RemoveVersionAsync](https://developer.roblox.com/en-us/api-reference/function/DataStore/RemoveVersionAsync), the function will return `nil`, `nil` for value and [DataStoreKeyInfo](https://developer.roblox.com/en-us/api-reference/class/DataStoreKeyInfo) respectively.

See Also
--------

*   [Data Stores](https://developer.roblox.com/en-us/articles/data-store), an in-depth guide on data structure, management, error handling, etc.