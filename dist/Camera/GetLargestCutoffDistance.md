This function is used by *'PopperCam'* in the default camera scripts to
ensure obstructions do not come between the [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera) and the
[`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera)'s subject.

This function will check all [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) and
[`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) in the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) with the following exceptions:

- Any [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) specified in the *ignoreList* (including its
descendants) will be ignored
- [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) with [`BasePart.CanCollide`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanCollide) set to false
are ignored
- [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) with a [`BasePart.Transparency`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Transparency) greater
than 0.95 will be ignored Water [`Terrain`](https://create.roblox.com/docs/reference/engine/classes/Terrain) is ignored

Note, as this function requires an *ignoreList* to run, you should pass an
empty table when none is required.