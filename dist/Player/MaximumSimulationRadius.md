The maximum value a Player's [Player.SimulationRadius](https://create.roblox.com/docs/reference/engine/classes/Player#SimulationRadius) can grow to.
Defaults to 1000 and is measured in studs.

#### What is the SimulationRadius?

[Player.SimulationRadius](https://create.roblox.com/docs/reference/engine/classes/Player#SimulationRadius) determines the radius around the
[Player.Charater](https://create.roblox.com/docs/reference/engine/classes/Player#Charater) in which physically simulated objects, for whom network
ownership is set to automatic, are physically simulated by the [Player](https://create.roblox.com/docs/reference/engine/classes/Player).
In cases where a [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart) or assembly is within multiple player's
SimulationRadiuses, the closest player is chosen.

[Player.SimulationRadius](https://create.roblox.com/docs/reference/engine/classes/Player#SimulationRadius), measured in studs, starts at 10 and grows at a
rate of 5% per second until it reaches MaximumSimulationRadius.

Note:

- The [Player.SimulationRadius](https://create.roblox.com/docs/reference/engine/classes/Player#SimulationRadius) can be visualized using
  [PhysicsSettings.AreRegionsShown](https://create.roblox.com/docs/reference/engine/classes/PhysicsSettings#AreRegionsShown)
- When this property is changed, the [Player.SimulationRadiusChanged](https://create.roblox.com/docs/reference/engine/classes/Player#SimulationRadiusChanged)
  event fires
- For more information on network ownership, please see [this tutorial][1]

[1]: https://developer.roblox.com/articles/Network-Ownership