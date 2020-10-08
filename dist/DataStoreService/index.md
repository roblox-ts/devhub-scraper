**DataStoreService** exposes methods for getting [GlobalDataStore](https://developer.roblox.com/en-us/api-reference/class/GlobalDataStore) and [OrderedDataStore](https://developer.roblox.com/en-us/api-reference/class/OrderedDataStore) objects. Data stores can only be accessed by game servers, so you can only use **DataStoreService** within a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or a [ModuleScript](https://developer.roblox.com/en-us/api-reference/class/ModuleScript) that is used by a [Script](https://developer.roblox.com/en-us/api-reference/class/Script).

Using Data Stores in Studio
---------------------------

**DataStoreService** cannot be used in Studio if a game is not configured to allow access to API services. See the `Articles/Data store|Data Stores` article for instructions.

Request Limits
--------------

There are limits applied to the data store model. Please see `Articles/Datastore Errors|Data Store Errors and Limits` for details.