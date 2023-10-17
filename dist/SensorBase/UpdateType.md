Determines how the sensor will update its output data.

With `Enum.SensorUpdateType.OnRead`, internal sensor logic is run so that
the output properties are always up to date. In this mode, the sensor will
only run if you read the properties and they are currently outdated.

With `Enum.SensorUpdateType.Manual`, the output properties will never
change. Instead, you can write your own scripts to set the output
properties as you like.