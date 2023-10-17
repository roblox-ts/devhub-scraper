The GripForward properties is one of the properties that specifies a
Tool's orientation in a character's hand. This represents the R02, R12,
and R22 values of the Grip `Datatype.CFrame|CFrame's` rotation matrix.

Other tool properties that control how a player holds a tool include:
[`Up`](https://create.roblox.com/docs/reference/engine/classes/Tool#GripUp), [`Right`](https://create.roblox.com/docs/reference/engine/classes/Tool#GripRight), and
[`Pos`](https://create.roblox.com/docs/reference/engine/classes/Tool#GripPos) properties. All of these properties are stored in
a single CFrame in the [`Tool.Grip`](https://create.roblox.com/docs/reference/engine/classes/Tool#Grip) property.

In order to change a tool's grip properties, you must either use a
[`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) or a Studio plugin such as the [Tool
Grip Editor](https://create.roblox.com/docs/https://www.roblox.com/library/174577307/Tool-Grip-Editor-Plugin) example.