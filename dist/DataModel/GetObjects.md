This method returns an array of [`Instances`](https://create.roblox.com/docs/reference/engine/classes/Instance) associated with
the given content URL. It can be used to insert content from the Roblox
library. It's not possible to insert [`Sounds`](https://create.roblox.com/docs/reference/engine/classes/Sound) using this
method as they do not have an [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) associated with them and
have only a content URL.

Unlike [`InsertService:LoadAsset()`](https://create.roblox.com/docs/reference/engine/classes/InsertService#LoadAsset), `DataModel:GetObjects()` does
not require an asset to be "trusted," meaning that an asset doesn't need
to be owned by the logged in user, or created by Roblox, to be inserted.
However, if the asset is not owned by the logged in user it must be freely
available.

Due to this function's security context it can only be used by plugins or
the command bar. For an alternative that can be used in
[`Scripts`](https://create.roblox.com/docs/reference/engine/classes/Script) and [`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript), see
[`InsertService:LoadAsset()`](https://create.roblox.com/docs/reference/engine/classes/InsertService#LoadAsset).