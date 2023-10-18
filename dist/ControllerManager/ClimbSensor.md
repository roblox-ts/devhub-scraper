A reference to the sensor data used while a [`ClimbController`](https://create.roblox.com/docs/reference/engine/classes/ClimbController) is
active. A [`ClimbController`](https://create.roblox.com/docs/reference/engine/classes/ClimbController) will use the
[`ControllerPartSensor.HitPart`](https://create.roblox.com/docs/reference/engine/classes/ControllerPartSensor#HitPart),
[`ControllerPartSensor.HitFrame`](https://create.roblox.com/docs/reference/engine/classes/ControllerPartSensor#HitFrame), and
[`ControllerPartSensor.HitNormal`](https://create.roblox.com/docs/reference/engine/classes/ControllerPartSensor#HitNormal) for climb movement computations.
Typically a [`ControllerPartSensor`](https://create.roblox.com/docs/reference/engine/classes/ControllerPartSensor) set to [`Enum.SensorMode`](https://create.roblox.com/docs/reference/engine/enums/SensorMode)
is used here. Otherwise, you can override the sensor's outputs to direct
what sensor data you want the [`ClimbController`](https://create.roblox.com/docs/reference/engine/classes/ClimbController) to use.