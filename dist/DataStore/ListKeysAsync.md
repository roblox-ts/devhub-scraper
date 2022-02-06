This function returns a [DataStoreKeyPages](https://developer.roblox.com/en-us/api-reference/class/DataStoreKeyPages) object for enumerating through keys of a data store. It accepts an optional `prefix` parameter to only locate keys whose names start with the provided prefix.

If [DataStoreOptions.AllScopes](https://developer.roblox.com/en-us/api-reference/property/DataStoreOptions/AllScopes) was set to true when accessing the data store through [DataStoreService:GetDataStore](https://developer.roblox.com/en-us/api-reference/function/DataStoreService/GetDataStore), keys will be returned with all scopes as prefixes.

See Also
--------

*   [Data Stores](https://developer.roblox.com/en-us/articles/data-store), an in-depth guide on data structure, management, error handling, etc.