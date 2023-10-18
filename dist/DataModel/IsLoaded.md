This function returns true if the client has finished loading the game for
the first time.

When all initial [`Instances`](https://create.roblox.com/docs/reference/engine/classes/Instance) in the game have finished
replicating to the client, this function will return true.

Unless they are parented to [`ReplicatedFirst`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedFirst),
[`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) will not run while the game has not
loaded. The following snippet, ran from a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) in
[`ReplicatedFirst`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedFirst) will yield until the game has loaded:
```lua
if not game:IsLoaded() then
    game.Loaded:Wait()
end
```

See also:

- [`DataModel.Loaded`](https://create.roblox.com/docs/reference/engine/classes/DataModel#Loaded), an event that fires when the game has loaded
- [`Instance:WaitForChild()`](https://create.roblox.com/docs/reference/engine/classes/Instance#WaitForChild), a function which can be used to wait
for an individual [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) to replicate without having to wait
for the whole game to