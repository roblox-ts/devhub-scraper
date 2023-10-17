The UserId is a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) property that contains a read-only integer
that **uniquely and consistently** identifies every user account on
Roblox. Unlike the [`Instance.Name`](https://create.roblox.com/docs/reference/engine/classes/Instance#Name) of a Player, which may change
according the user's present username, this value will never change for
the same account.

This property is essential when saving/loading player data using
[`GlobalDataStores`](https://create.roblox.com/docs/reference/engine/classes/GlobalDataStore). Use a player's UserId as the
data store key so that each player has a unique key.