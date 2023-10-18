Yields until all of the assets associated with the given
[`Instances`](https://create.roblox.com/docs/reference/engine/classes/Instance) or [`Content`](https://create.roblox.com/docs/reference/engine/datatypes/Content) strings have loaded. This
can be used to pause a script and not use content until it is certain that
the content has been loaded into the experience.

When called, the engine identifies links to content for each item in the
list. For any of the [`Instances`](https://create.roblox.com/docs/reference/engine/classes/Instance) which have properties that
define links to content, such as a [`Decal`](https://create.roblox.com/docs/reference/engine/classes/Decal) or a
[`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound), the engine attempts to load these assets from Roblox.
For each requested asset, the callback function runs, indicating the
asset's final [`Enum.AssetFetchStatus`](https://create.roblox.com/docs/reference/engine/enums/AssetFetchStatus).

If any of the assets fail to load, an error message appears in the output.
The method itself will not error and it will continue executing until it
has processed each requested instance or asset ID.