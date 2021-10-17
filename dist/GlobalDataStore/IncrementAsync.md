This function increments the value of a key by the provided amount (both must be integers).

[OrderedDataStore](https://developer.roblox.com/en-us/api-reference/class/OrderedDataStore) does not support versioning, so calling this method on an [OrderedDataStore](https://developer.roblox.com/en-us/api-reference/class/OrderedDataStore) key will overwrite the current value with the incremented value and make previous versions inaccessible.

See Also
--------

*   `Articles/Data store|Data Stores`, an in-depth guide on data structure, management, error handling, etc.