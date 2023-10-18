This property describes the version of the place the server is running on.

This version number corresponds with the version number shown under the
*Version History* section of the place's settings. It is not the current
version of the Roblox client.

In Roblox Studio, this property is set to *0*.

When a server instance is created for a place, it uses the place's current
version. If the place is later updated while this server is running, the
server will remain at its current version.

This property can be used to display a [`ScreenGui`](https://create.roblox.com/docs/reference/engine/classes/ScreenGui) showing the
current version of the game to [`Players`](https://create.roblox.com/docs/reference/engine/classes/Player) to assist with
debugging.