A [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) is a Lua code container that can access server-side objects,
properties, and events, such as to award badges to players using
[`BadgeService`](https://create.roblox.com/docs/reference/engine/classes/BadgeService), while [`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) on the client
cannot.

The instant that the following conditions are met, a script's code is run in a
new thread:

- Its [`Enabled`](https://create.roblox.com/docs/reference/engine/classes/Script#Enabled) property is `true`.
- The [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) object is a descendant of the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace) or
[`ServerScriptService`](https://create.roblox.com/docs/reference/engine/classes/ServerScriptService).

The script will continue to run until the above conditions are **not** met, it
terminates, or it raises an error (unless that error is raised by a function
connected to some event that is firing). Additionally, the thread will be
stopped if the script or one of its ancestors is destroyed. A script will
continue to run even if the [`Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) property is set to
`nil` and the [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) is not destroyed.