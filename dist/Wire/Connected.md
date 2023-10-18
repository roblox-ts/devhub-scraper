Denotes whether the [`Wire`](https://create.roblox.com/docs/reference/engine/classes/Wire) is connected, meaning its
[`SourceInstance`](https://create.roblox.com/docs/reference/engine/classes/Wire#SourceInstance),
[`TargetInstance`](https://create.roblox.com/docs/reference/engine/classes/Wire#TargetInstance),
[`SourceName`](https://create.roblox.com/docs/reference/engine/classes/Wire#SourceName), and [`TargetName`](https://create.roblox.com/docs/reference/engine/classes/Wire#TargetName)
properties are all assigned, the connection is valid, and the connection
does not result in a cyclic processing graph. Cyclic processing graphs are
invalid since they can result in infinite computation; attempting to
create one will log an error.