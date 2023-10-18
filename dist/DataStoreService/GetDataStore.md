This function creates a [`DataStore`](https://create.roblox.com/docs/reference/engine/classes/DataStore) instance with the provided name
and scope. Subsequent calls to this method with the same name/scope will
return the same object.

Using the `scope` parameter will restrict operations to that scope by
automatically prepending the scope to keys in all operations done on the
data store. This function also accepts an optional
[`DataStoreOptions`](https://create.roblox.com/docs/reference/engine/classes/DataStoreOptions) instance which includes options for enabling
[`AllScopes`](https://create.roblox.com/docs/reference/engine/classes/DataStoreOptions#AllScopes). See
[Data Stores](https://create.roblox.com/docs/cloud-services/datastores) for details on scope.