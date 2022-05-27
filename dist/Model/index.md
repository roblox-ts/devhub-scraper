Models are container objects, meaning they group objects together. They are
best used to hold collections of [BaseParts](https://create.roblox.com/docs/reference/engine/classes/BasePart) and have a number of
functions that extend their functionality.

Models are intended to represent **geometric** groupings. If your grouping has
no geometric interpretation, for instance a collection of [Scripts](https://create.roblox.com/docs/reference/engine/classes/Script),
use a [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder) instead.

Models whose constituent parts are joined together with joints (so that they
can move around or be destroyed via physics simulation) usually have a
[PrimaryPart](https://create.roblox.com/docs/reference/engine/classes/Model#PrimaryPart) set, as it specifies which part within the
model the pivot and bounding box will "follow" as the model moves. Static
models which stay in one place do not benefit from having a primary part set.

Models have a wide range of applications, including Roblox player characters.
They also have a number of unique behaviors that are important to keep in
mind:

- When a [Humanoid](https://create.roblox.com/docs/reference/engine/classes/Humanoid) and a [Part](https://create.roblox.com/docs/reference/engine/classes/Part) named **Head** are parented under a model, a
  name/health GUI will appear over the model; see
  [Character
  Name/Health Display](https://developer.roblox.com/articles/character-name-health-display) for details.
- If a part's position on the **Y** axis hits the
  [Workspace.FallenPartsDestroyHeight](https://create.roblox.com/docs/reference/engine/classes/Workspace#FallenPartsDestroyHeight) value, and it was the last object
  inside of a [Model](https://create.roblox.com/docs/reference/engine/classes/Model), the model will be destroyed as well.