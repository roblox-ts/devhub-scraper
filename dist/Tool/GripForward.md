The GripForward properties is one of the properties that specifies a
Tool's orientation in a character's hand. This represents the R02, R12,
and R22 values of the Grip [CFrame's](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) rotation matrix.

Other tool properties that control how a player holds a tool include:
[Up](https://create.roblox.com/docs/reference/engine/classes/Grip#GripUp), [Right](https://create.roblox.com/docs/reference/engine/classes/Grip#GripRight), and [Pos](https://create.roblox.com/docs/reference/engine/classes/Grip#GripPos)
properties. All of these properties are stored in a single CFrame in the
[Tool.Grip](https://create.roblox.com/docs/reference/engine/classes/Tool#Grip) property.

In order to change a tool's grip properties, you must either use a
[Script](https://create.roblox.com/docs/reference/engine/classes/Script) or [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript) or a Studio plugin such as [this][1] one.

[1]: https://www.roblox.com/library/174577307/Tool-Grip-Editor-Plugin