This function binds a function to be called prior to the game shutting down.

Multiple functions can be bound using BindToClose if it is called repeatedly. The game will wait a maximum of 30 seconds for all bound functions to complete running before shutting down. After 30 seconds, the game will shut down regardless if all bound functions have completed or not.

Bound functions will be called in parallel, meaning they will run at the same time.

You are advised to use [RunService:IsStudio](https://developer.roblox.com/en-us/api-reference/function/RunService/IsStudio) to verify the current session is not Roblox Studio. If this is not done, all bound functions will be required to complete in offline testing sessions.

When using the [DataStoreService](https://developer.roblox.com/en-us/api-reference/class/DataStoreService), best practice is to bind a function saving all unsaved data to [DataStores](https://developer.roblox.com/en-us/api-reference/class/GlobalDataStore) using BindToClose. Otherwise, data may be lost if the game shuts down unexpectedly. For an example of this, refer to the code samples.

See also
--------

*   [PluginGui:BindToClose](https://developer.roblox.com/en-us/api-reference/function/PluginGui/BindToClose), which is used to bind a function to a [PluginGui](https://developer.roblox.com/en-us/api-reference/class/PluginGui) close button and should not be confused with this function