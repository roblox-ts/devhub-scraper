This function sets the latest value, [UserIds](https://developer.roblox.com/en-us/api-reference/property/Player/UserId), and metadata for the given key.

Values in data stores are versioned, meaning [GlobalDataStore:SetAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/SetAsync) will create a new version every time it is called. Prior versions can be accessed through [DataStore:ListVersionsAsync](https://developer.roblox.com/en-us/api-reference/function/DataStore/ListVersionsAsync)/[DataStore:GetVersionAsync](https://developer.roblox.com/en-us/api-reference/function/DataStore/GetVersionAsync) for up to 30 days at which point they are permanently deleted.

[OrderedDataStore](https://developer.roblox.com/en-us/api-reference/class/OrderedDataStore) does not support versioning, so calling this method on an [OrderedDataStore](https://developer.roblox.com/en-us/api-reference/class/OrderedDataStore) key will overwrite the current value and make previous versions inaccessible.

Metadata definitions must always be updated with a value, even if there are no changes to the current value; otherwise the current value will be lost.

Any string being stored in a data store must be valid [UTF-8](https://developer.roblox.com/en-us/api-reference/class/Articles/Lua Libraries/utf8). In UTF-8, values greater than 127 are used exclusively for encoding multi-byte codepoints, so a single byte greater than 127 will not be valid UTF-8 and the [GlobalDataStore:SetAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/SetAsync) attempt will fail.

##### Set vs. Update

[GlobalDataStore:SetAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/SetAsync) is best for a quick update of a specific key, and it only counts against the write limit. However, it may cause data inconsistency if two servers attempt to set the same key at the same time.

[GlobalDataStore:UpdateAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/UpdateAsync) is safer for handling multi-server attempts because it reads the current key value (from whatever server last updated it) before making any changes. However, it's somewhat slower because it reads before it writes, and it also counts against both the read and write limit.

See Also
--------

*   [Data Stores](https://developer.roblox.com/en-us/articles/Data-store), an in-depth guide on data structure, management, error handling, etc.