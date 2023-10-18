This event fires on the client when the game finishes loading for the
first time.

The Loaded event fires when all initial [`Instances`](https://create.roblox.com/docs/reference/engine/classes/Instance) in the
game have finished replicating to the client.

Unless they are parented to [`ReplicatedFirst`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedFirst),
[`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) will not run prior to this event firing.
The following snippet, ran from a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) in
[`ReplicatedFirst`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedFirst), will yield until the game has loaded:
```lua
if not game:IsLoaded() then
    game.Loaded:Wait()
end
```

See also:

- [`DataModel:IsLoaded()`](https://create.roblox.com/docs/reference/engine/classes/DataModel#IsLoaded), a function that returns if the game is
loaded or not
- [`Instance:WaitForChild()`](https://create.roblox.com/docs/reference/engine/classes/Instance#WaitForChild), a function which can be used to wait
for an individual [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) to replicate without having to wait
for the whole game to load.