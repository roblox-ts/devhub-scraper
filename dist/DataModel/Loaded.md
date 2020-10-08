This event fires on the client when the game finishes loading for the first time.

The Loaded event fires when all initial [Instances](https://developer.roblox.com/en-us/api-reference/class/Instance) in the game have finished replicating to the client.

Unless they are parented to [ReplicatedFirst](https://developer.roblox.com/en-us/api-reference/class/ReplicatedFirst), [LocalScripts](https://developer.roblox.com/en-us/api-reference/class/LocalScript) will not run prior to this event firing. The following snippet, ran from a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) in [ReplicatedFirst](https://developer.roblox.com/en-us/api-reference/class/ReplicatedFirst), will yield until the game has loaded:

```Lua
if not game:IsLoaded() then
    game.Loaded:Wait()
end
``` 

See also
--------

*   [DataModel:IsLoaded](https://developer.roblox.com/en-us/api-reference/function/DataModel/IsLoaded), a function that returns if the game is loaded or not
*   [Instance:WaitForChild](https://developer.roblox.com/en-us/api-reference/function/Instance/WaitForChild), a function which can be used to wait for an individual [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance) to replicate without having to wait for the whole game to