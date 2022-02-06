This function permanently deletes the specified version of a key. Version identifiers can be found through [DataStore:ListVersionsAsync](https://developer.roblox.com/en-us/api-reference/function/DataStore/ListVersionsAsync).

Unlike [GlobalDataStore:RemoveAsync](https://developer.roblox.com/en-us/api-reference/function/GlobalDataStore/RemoveAsync), this function does not create a new “tombstone” version and the removed value cannot be retrieved later.

See Also
--------

*   [Data Stores](https://developer.roblox.com/en-us/articles/Data-store), an in-depth guide on data structure, management, error handling, etc.