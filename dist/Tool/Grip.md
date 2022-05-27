The Grip property stores the [Tool's](https://create.roblox.com/docs/reference/engine/classes/Tool) Grip properties as a single
[CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame). This includes the [Up](https://create.roblox.com/docs/reference/engine/classes/Grip#Up),
[Right](https://create.roblox.com/docs/reference/engine/classes/Grip#Right), [Forward](https://create.roblox.com/docs/reference/engine/classes/Grip#Forward), and [Pos](https://create.roblox.com/docs/reference/engine/classes/Grip#Pos) properties.

The grip properties are used to position how the player holds the tool.

Unlike the grip properties that it stores, this property is not visible in
a tool's `Properties` window in Studio. Regardless, it can be set and
retrieved using a [Script](https://create.roblox.com/docs/reference/engine/classes/Script) or [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

![Grip properties in Studio's Properties Window][1]

In order to change a tool's grip properties, you must either use a
[Script](https://create.roblox.com/docs/reference/engine/classes/Script) or [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) or a Studio plugin such as [this][1] one.

[1]: https://prod.docsiteassets.roblox.com/assets/blt87cc763d68414be8/Screen_Shot_2018-08-26_at_8.35.48_PM.png
[2]: https://www.roblox.com/library/174577307/Tool-Grip-Editor-Plugin