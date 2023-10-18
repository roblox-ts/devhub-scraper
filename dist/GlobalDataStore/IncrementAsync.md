This function increments the value of a key by the provided amount (both
must be integers).

[`OrderedDataStore`](https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore) does not support versioning, so calling this
method on an [`OrderedDataStore`](https://create.roblox.com/docs/reference/engine/classes/OrderedDataStore) key will overwrite the current value
with the incremented value and make previous versions inaccessible.