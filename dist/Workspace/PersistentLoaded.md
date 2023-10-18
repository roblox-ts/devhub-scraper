This event fires every time a player has been sent all current persistent
models and part-less atomic models. The `player` parameter indicates which
player has received all applicable instances.

Note that experience loading happens before persistent loading, and firing
of the [`DataModel.Loaded`](https://create.roblox.com/docs/reference/engine/classes/DataModel#Loaded) event does not indicate that all
persistent models are present.