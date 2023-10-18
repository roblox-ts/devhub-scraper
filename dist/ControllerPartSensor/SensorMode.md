Determines what behavior this [`SensorBase`](https://create.roblox.com/docs/reference/engine/classes/SensorBase) uses when sensing other
parts.

A setting of [`Enum.SensorMode`](https://create.roblox.com/docs/reference/engine/enums/SensorMode) performs the same ladder detection
logic used by a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) to populate sensor output. It currently
always senses along the forward vector of its parent [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart).

A setting of [`Enum.SensorMode`](https://create.roblox.com/docs/reference/engine/enums/SensorMode) performs the same floor detection
logic used by a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) to populate sensor output. It currently
always senses along the negative up vector of the world.