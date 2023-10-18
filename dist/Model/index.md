Models are container objects, meaning they group objects together. They are
best used to hold collections of [`BaseParts`](https://create.roblox.com/docs/reference/engine/classes/BasePart) and have a number
of functions that extend their functionality.

Models are intended to represent **geometric** groupings. If your grouping has
no geometric interpretation, for instance a collection of
[`Scripts`](https://create.roblox.com/docs/reference/engine/classes/Script), use a [`Folder`](https://create.roblox.com/docs/reference/engine/classes/Folder) instead.

Models whose constituent parts are joined together with joints (so that they
can move around or be destroyed via physics simulation) usually have a
[`PrimaryPart`](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart) set, as it specifies which part within
the model the pivot and bounding box will "follow" as the model moves. Static
models which stay in one place do not benefit from having a primary part set.

Models have a wide range of applications, including Roblox player characters.
They also have a number of unique behaviors that are important to keep in
mind:

- When a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) and a [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) named **Head** are parented under
a model, a name/health GUI will appear over the model; see
[Character Name/Health Display](https://create.roblox.com/docs/characters/name-health-display)
for details.
- If a part's position on the **Y** axis hits the
[`Workspace.FallenPartsDestroyHeight`](https://create.roblox.com/docs/reference/engine/classes/Workspace#FallenPartsDestroyHeight) value, and it was the last object
inside of a [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model), the model will be destroyed as well.
- When used in a place with [`Workspace.StreamingEnabled`](https://create.roblox.com/docs/reference/engine/classes/Workspace#StreamingEnabled) set to true,
the value of [`ModelStreamingMode`](https://create.roblox.com/docs/reference/engine/classes/Model#ModelStreamingMode) controls
various behaviors around how the model and any descendants are replicated
and/or removed from clients. In addition, the value of
[`LevelOfDetail`](https://create.roblox.com/docs/reference/engine/classes/Model#LevelOfDetail) impacts rendering of the model.

As with all [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) types, the fact that a parent [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model) is
replicated to a client does not guarantee that all its children are
replicated. This is particularly important if these instances are being
accessed by code running on the client, such as in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).
Using [`ModelStreamingMode`](https://create.roblox.com/docs/reference/engine/classes/Model#ModelStreamingMode) with values such as
[`Atomic`](https://create.roblox.com/docs/reference/engine/enums/ModelStreamingMode) can ensure that the entire model and all of
its descendants are present if the parent model exists on the client, or you
can use [`WaitForChild()`](https://create.roblox.com/docs/reference/engine/classes/Instance#WaitForChild) when atomicity is not
desired.