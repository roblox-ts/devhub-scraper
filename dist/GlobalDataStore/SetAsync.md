Sets the value of the key. This overwrites any existing data stored in the key.

If the previous value of the key is important, use `GlobalDataStore/UpdateAsync|UpdateAsync()` instead. Using `GlobalDataStore/GetAsync|GetAsync()` to retrieve a value and then setting the key with `GlobalDataStore/SetAsync|SetAsync()` is risky because `GlobalDataStore/GetAsync|GetAsync()` sometimes returns cached data and other game servers may have modified the key.

Any string being stored in a data store must be valid `Articles/Lua Libraries/utf8|UTF-8`. In UTF-8, values greater than 127 are used exclusively for encoding multi-byte codepoints, so a single byte greater than 127 will not be valid UTF-8 and the `GlobalDataStore/SetAsync|SetAsync()` attempt will fail.

If this function throws an error, the `Articles/Datastore Errors|error message` will describe the problem. Note that there are also [limits](https://developer.roblox.com/en-us/api-reference/class/Articles/Datastore Errors) that apply to this function.

See the `Articles/Data store|Data Stores` article for an in-depth guide on data structure, management, error handling, etc.