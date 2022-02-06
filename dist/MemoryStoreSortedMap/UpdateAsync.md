Retrieves the value of a key from a sorted map and lets you update it to a new value via a callback function.

This method accepts a callback function that transforms the old value into the updated value as required. The method retrieves the existing key value and passes it to the transform function which returns the new value for the item, with these exceptions:

*   If the key does not exist, the old value passed to the function will be nil.
*   If the function returns nil, the update is canceled.

The new value is saved only if the key was not updated (e.g. by a different game server) since the moment it was read. If the value did change, the transform function is invoked again with the most recent item value. This cycle repeats until the value is saved successfully or the transform function returns nil to abort the operation.

For a more in-depth look, take a look at the [Memory Store](https://developer.roblox.com/en-us/articles/Memory-Store) article.