A [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) is a Lua code container that runs its contents on the
client (player's device) instead of the server. It is used to access
client-only objects such as the player's [`Camera`](https://create.roblox.com/docs/reference/engine/classes/Camera).

For code run through [`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript), the
[`LocalPlayer`](https://create.roblox.com/docs/reference/engine/classes/Players#LocalPlayer) property of the [`Players`](https://create.roblox.com/docs/reference/engine/classes/Players)
service will return the player whose client is running the script.

See [here](https://create.roblox.com/docs/projects/data-model#client) for a table of valid
container services from which [`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) will execute.