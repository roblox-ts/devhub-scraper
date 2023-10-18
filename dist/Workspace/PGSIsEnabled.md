Returns true if the game has the PGS Physics solver enabled.

As [`Workspace.PGSPhysicsSolverEnabled`](https://create.roblox.com/docs/reference/engine/classes/Workspace#PGSPhysicsSolverEnabled) cannot be accessed by
scripts, the PGSIsEnabled function allows developers to tell which physics
solver the game is using.
```lua
print(workspace:PGSIsEnabled()) -- true = PGS solver enabled
print(workspace:PGSIsEnabled()) -- false = Legacy solver enabled
```