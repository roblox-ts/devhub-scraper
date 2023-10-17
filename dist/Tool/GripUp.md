The GripUp property is one of the properties that specifies a Tool's
orientation in a character's hand. This represents the R01, R11, and R21
values of the Grip `Datatype.CFrame|CFrame's` rotation matrix.

Other tool properties that control how a player holds a tool include:
[`Right`](https://create.roblox.com/docs/reference/engine/classes/Tool#GripRight), [`Forward`](https://create.roblox.com/docs/reference/engine/classes/Tool#GripForward), and
[`Pos`](https://create.roblox.com/docs/reference/engine/classes/Tool#GripPos) properties. All of these properties are stored in
a single CFrame in the [`Tool.Grip`](https://create.roblox.com/docs/reference/engine/classes/Tool#Grip) property.

In order to change a tool's grip properties, you must either use a
[`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) or a plugin such as the [Tool Grip
Editor](https://create.roblox.com/docs/https://www.roblox.com/library/174577307/Tool-Grip-Editor-Plugin) example.