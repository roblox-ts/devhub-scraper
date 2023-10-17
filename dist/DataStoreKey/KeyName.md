This property indicates the name of the key. This name can then be used in
other operations such as [`GlobalDataStore:GetAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#GetAsync) and
[`GlobalDataStore:SetAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#SetAsync).

If [`DataStoreOptions.AllScopes`](https://create.roblox.com/docs/reference/engine/classes/DataStoreOptions#AllScopes) was set to true when accessing the
data store through [`DataStoreService:GetDataStore()`](https://create.roblox.com/docs/reference/engine/classes/DataStoreService#GetDataStore), the name will
include its scope as a prefix.