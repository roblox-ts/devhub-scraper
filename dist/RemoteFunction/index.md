A **RemoteFunction** is used to create in-game APIs that both the client and the server can use to communicate with each other. Like [BindableFunction](https://developer.roblox.com/en-us/api-reference/class/BindableFunction), a RemoteFunction can be invoked (called) to do a certain action and return the results.

If the result is **not** needed, we recommend that you use a [RemoteEvent](https://developer.roblox.com/en-us/api-reference/class/RemoteEvent) instead, since its call is asynchronous and doesn't need to wait for a response to continue execution. See `[Remote Functions and Events](https://developer.roblox.com/articles/Remote-Functions-and-Events)` for more info.