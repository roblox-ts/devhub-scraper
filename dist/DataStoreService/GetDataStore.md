This function creates a [DataStore](https://developer.roblox.com/en-us/api-reference/class/DataStore) instance with the provided name and scope. Subsequent calls to this method with the same name/scope will return the same object.

Using the `scope` parameter will restrict operations to that scope by automatically prepending the scope to keys in all operations done on the data store. This function also accepts an optional [DataStoreOptions](https://developer.roblox.com/en-us/api-reference/class/DataStoreOptions) instance which includes options for enabling [AllScopes](https://developer.roblox.com/en-us/api-reference/property/DataStoreOptions/AllScopes). See [here](https://developer.roblox.com/articles/Data-store#scope) for details on scope.

See Also
--------

*   [Data Stores](https://developer.roblox.com/en-us/articles/data-store), an in-depth guide on data structure, management, error handling, etc.