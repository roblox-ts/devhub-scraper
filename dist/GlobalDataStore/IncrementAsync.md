Increments the value for a particular key and returns the incremented value. Only works on values that are integers. Note that you can use `GlobalDataStore/OnUpdate|OnUpdate()` to execute a function every time the database updates the key's value, such as after calling this function.

If this function throws an error, the `Articles/Datastore Errors|error message` will describe the problem. Note that there are also [limits](https://developer.roblox.com/en-us/api-reference/class/Articles/Datastore Errors) that apply to this function.

See the `Articles/Data store|Data Stores` article for an in-depth guide on data structure, management, error handling, etc.