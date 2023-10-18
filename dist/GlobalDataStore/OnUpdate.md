This function sets **callback** as the function to be run any time the
value associated with the [`data store's`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore) key
changes. Once every minute, OnUpdate polls for changes by other servers.
Changes made on the same server will run the function immediately. In
other words, functions like
[`IncrementAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#IncrementAsync),
[`SetAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#SetAsync), and
[`UpdateAsync()`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore#UpdateAsync) change the key's value
in the data store and will cause the function to run.

It's recommended that you **disconnect** the connection when the
subscription to the key is no longer needed.