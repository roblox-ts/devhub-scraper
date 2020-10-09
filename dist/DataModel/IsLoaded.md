This function returns true if the client has finished loading the game for the first time.

When all initial [Instances](https://developer.roblox.com/en-us/api-reference/class/Instance) in the game has finished replicating to the client, this function will return true.

Unless they are parented to [ReplicatedFirst](https://developer.roblox.com/en-us/api-reference/class/ReplicatedFirst), [LocalScripts](https://developer.roblox.com/en-us/api-reference/class/LocalScript) will not run while the game has not loaded. The following snippet, ran from a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) in [ReplicatedFirst](https://developer.roblox.com/en-us/api-reference/class/ReplicatedFirst) will yield until the game has loaded:

```lua
if not game:IsLoaded() then
    game.Loaded:Wait()
end
``` 

See also
--------

*   [DataModel.Loaded](https://developer.roblox.com/en-us/api-reference/event/DataModel/Loaded), an event that fires when the game has loaded
*   [Instance:WaitForChild](https://developer.roblox.com/en-us/api-reference/function/Instance/WaitForChild), a function which can be used to wait for an individual [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) to replicate without having to wait for the whole game to