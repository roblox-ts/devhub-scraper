A Script is a type of Lua code container that will run its contents on the
server. By default, Scripts have `print("Hello, world")` as their contents.
The instant that the following conditions are met, a Script's Lua code is run
in a new thread:

- Disabled property is false
- The Script object is a descendant of the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace) or
  [ServerScriptService](https://create.roblox.com/docs/reference/engine/classes/ServerScriptService)

The Script will continue to run until the above conditions are not met, it
terminates or it raises an error (unless that error is raised by a function
connected to some event that is firing). Additionally, the thread will be
stopped if the Script or one of its ancestors is destroyed. A script will
continue to run even if the [Parent](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) property is set to nil
(and the Script is not destroyed).

It has access to server-side objects, properties and events. For example,
Scripts can award badges to players using [BadgeService](https://create.roblox.com/docs/reference/engine/classes/BadgeService), while a
[LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) on the client cannot. Actions taken by LocalScripts that are not
replicated (due to [Workspace.FilteringEnabled](https://create.roblox.com/docs/reference/engine/classes/Workspace#FilteringEnabled)) will not be visible to
Scripts.