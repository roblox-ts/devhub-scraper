The Grip property stores the tool's "grip" properties as a single
`Datatype.CFrame`. These properties position how the player holds the tool
and include `GripUp`, `GripRight`, `GripForward`, and `GripPos`.

Unlike the grip properties that it stores, this consolidated property
doesn't appear in the [Properties](https://create.roblox.com/docs/studio/properties) window
in Studio. Regardless, you can set and get it from a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) or
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).