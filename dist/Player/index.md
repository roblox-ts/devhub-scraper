A **Player** object is a client that is currently connected. These objects are
added to the [`Players`](https://create.roblox.com/docs/reference/engine/classes/Players) service when a new player connects, then removed
when they eventually disconnect from the server.

The [`Instance.Name`](https://create.roblox.com/docs/reference/engine/classes/Instance#Name) property reflects the player's username. When saving
information about a player, you should use their [`Player.UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId) since
it is possible that a player can change their username.

There are several similar methods in the [`Players`](https://create.roblox.com/docs/reference/engine/classes/Players) service for working
with Player objects. Use these over their respective [`Instance`](https://create.roblox.com/docs/reference/engine/classes/Instance) methods:

- You can get a table of current Player objects using
[`Players:GetPlayers()`](https://create.roblox.com/docs/reference/engine/classes/Players#GetPlayers); again, use this instead of
[`Instance:GetChildren()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetChildren).
- To detect the addition of Player objects, it is recommended to use the
[`Players.PlayerAdded`](https://create.roblox.com/docs/reference/engine/classes/Players#PlayerAdded) event (instead of [`Instance.ChildAdded`](https://create.roblox.com/docs/reference/engine/classes/Instance#ChildAdded) on
the [`Players`](https://create.roblox.com/docs/reference/engine/classes/Players) service).
- Similarly, you can detect the removal of Player objects using
[`Players.PlayerRemoving`](https://create.roblox.com/docs/reference/engine/classes/Players#PlayerRemoving), which fires just **before** the Player is
removed (instead of [`Instance.ChildRemoved`](https://create.roblox.com/docs/reference/engine/classes/Instance#ChildRemoved) which fires after). This
is important if you are saving information about the player that might be
removed or cleaned up on-removal.