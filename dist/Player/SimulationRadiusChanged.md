Fired when the [Player](https://developer.roblox.com/en-us/api-reference/class/Player)'s [Player.SimulationRadius](https://developer.roblox.com/en-us/api-reference/property/Player/SimulationRadius) is changed.

What is the SimulationRadius?
-----------------------------

[Player.SimulationRadius](https://developer.roblox.com/en-us/api-reference/property/Player/SimulationRadius) determines the radius around the [Player.Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character) in which physically simulated objects, for whom network ownership is set to automatic, are physically simulated by the [Player](https://developer.roblox.com/en-us/api-reference/class/Player). In cases where a [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) or assembly is within multiple player's SimulationRadiuses, the closest player is chosen.

[Player.SimulationRadius](https://developer.roblox.com/en-us/api-reference/property/Player/SimulationRadius), measured in studs, starts at 10 and grows at a rate of 5% per second until it reaches [Player.MaximumSimulationRadius](https://developer.roblox.com/en-us/api-reference/property/Player/MaximumSimulationRadius).

Notes
-----

*   The [Player.SimulationRadius](https://developer.roblox.com/en-us/api-reference/property/Player/SimulationRadius) can be visualized using [PhysicsSettings.AreRegionsShown](https://developer.roblox.com/en-us/api-reference/property/PhysicsSettings/AreRegionsShown)
*   For more information on network ownership, please see [this tutorial](http://robloxdev.com/articles/Network-Ownership)