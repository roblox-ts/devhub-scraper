This function returns a [`DataStoreKeyPages`](https://create.roblox.com/docs/reference/engine/classes/DataStoreKeyPages) object for enumerating
through keys of a data store. It accepts an optional `prefix` parameter to
only locate keys whose names start with the provided prefix.

If [`DataStoreOptions.AllScopes`](https://create.roblox.com/docs/reference/engine/classes/DataStoreOptions#AllScopes) was set to true when accessing the
data store through [`DataStoreService:GetDataStore()`](https://create.roblox.com/docs/reference/engine/classes/DataStoreService#GetDataStore), keys will be
returned with all scopes as prefixes.