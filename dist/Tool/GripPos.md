The GripPos property controls the positional offset of a [Tool](https://create.roblox.com/docs/reference/engine/classes/Tool) weld
matrix. It is one of several properties used to position how the player
holds the tool.

Other tool properties that control how a player holds a tool include:
[Up](https://create.roblox.com/docs/reference/engine/classes/Grip#GripUp), [Right](https://create.roblox.com/docs/reference/engine/classes/Grip#GripRight), and [Forward](https://create.roblox.com/docs/reference/engine/classes/Grip#GripForward)
properties. All of these properties are stored in a single CFrame in the
[Tool.Grip](https://create.roblox.com/docs/reference/engine/classes/Tool#Grip) property.

In order to change a tool's grip properties, you must either use a
[Script](https://create.roblox.com/docs/reference/engine/classes/Script) or [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) or a plugin such as [this][1] one.

[1]: https://www.roblox.com/library/174577307/Tool-Grip-Editor-Plugin