This function permanently deletes the specified version of a key. Version
identifiers can be found through [`DataStore:ListVersionsAsync()`](https://create.roblox.com/docs/reference/engine/classes/DataStore#ListVersionsAsync).

Unlike [`GlobalDataStore:RemoveAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#RemoveAsync), this function does not
create a new "tombstone" version and the removed value cannot be retrieved
later.