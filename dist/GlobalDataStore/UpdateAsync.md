This function retrieves the value and metadata of a key from the data store and updates it with a new value determined by the callback function specified through the second parameter.

If the update succeeds, a new version of the value will be created and prior versions will remain accessible through [DataStore:ListVersionsAsync](https://developer.roblox.com/en-us/api-reference/function/DataStore/ListVersionsAsync) and [DataStore:GetVersionAsync](https://developer.roblox.com/en-us/api-reference/function/DataStore/GetVersionAsync).

[OrderedDataStore](https://developer.roblox.com/en-us/api-reference/class/OrderedDataStore) does not support versioning, so calling this function on an [OrderedDataStore](https://developer.roblox.com/en-us/api-reference/class/OrderedDataStore) key will overwrite the current value and make previous versions inaccessible.

In cases where another game server updated the key in the short timespan between retrieving the key's current value and setting the key's value, [GlobalDataStore:UpdateAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/UpdateAsync) will call the function again to ensure that no data is overwritten. The function will be called as many times as needed until the data is saved **or** until the callback function returns `nil`.

Any string being stored in a data store must be valid [UTF-8](https://developer.roblox.com/en-us/api-reference/class/Articles/Lua Libraries/utf8). In UTF-8, values greater than 127 are used exclusively for encoding multi-byte codepoints, so a single byte greater than 127 will not be valid UTF-8 and the [GlobalDataStore:UpdateAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/UpdateAsync) attempt will fail.

##### Set vs. Update

[GlobalDataStore:SetAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/SetAsync) is best for a quick update of a specific key, and it only counts against the write limit. However, it may cause data inconsistency if two servers attempt to set the same key at the same time.

[GlobalDataStore:UpdateAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/UpdateAsync) is safer for handling multi-server attempts because it reads the current key value (from whatever server last updated it) before making any changes. However, it's somewhat slower because it reads before it writes, and it also counts against both the read and write limit.

Callback Function
-----------------

The callback function accepts two arguments:

*   Current value of the key prior to the update.
*   [DataStoreKeyInfo](https://developer.roblox.com/en-us/api-reference/class/DataStoreKeyInfo) instance that contains the latest version information (this argument can be ignored if metadata is not being used).

In turn, the callback function returns up to three values:

*   The new value to set for the key.
*   An array of [UserIds](https://developer.roblox.com/en-us/api-reference/property/Player/UserId) to associate with the key. [DataStoreKeyInfo:GetUserIds](https://developer.roblox.com/en-us/api-reference/function/DataStoreKeyInfo/GetUserIds) should be returned unless the existing IDs are being changed; otherwise all existing IDs will be cleared.
*   A Lua table containing metadata to associate with the key. [DataStoreKeyInfo:GetMetadata](https://developer.roblox.com/en-us/api-reference/function/DataStoreKeyInfo/GetMetadata) should be returned unless the existing metadata is being changed; otherwise all existing metadata will be cleared.

The callback function cannot yield, so do **not** include calls like `wait()`.

See Also
--------

*   [Data Stores](https://developer.roblox.com/en-us/articles/Data-store), an in-depth guide on data structure, management, error handling, etc.