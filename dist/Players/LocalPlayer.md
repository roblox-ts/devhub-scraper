**LocalPlayer** is a read-only property which refers to the [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player)
whose client is running the experience.

This property is only defined for [`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) and
[`ModuleScripts`](https://create.roblox.com/docs/reference/engine/classes/ModuleScript) required by them, since they run on the
client. For the server, on which [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) objects run their code,
this property is `nil`.
#### Loading GUIs

When creating loading GUIs using [`ReplicatedFirst`](https://create.roblox.com/docs/reference/engine/classes/ReplicatedFirst), sometimes a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) can run before the LocalPlayer is available. In this
case, you should yield until it becomes available by using
[`Instance:GetPropertyChangedSignal()`](https://create.roblox.com/docs/reference/engine/classes/Instance#GetPropertyChangedSignal)