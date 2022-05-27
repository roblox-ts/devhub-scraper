When set to true, a cylinder is drawn around each [Player](https://create.roblox.com/docs/reference/engine/classes/Player)'s character,
representing their [Player.SimulationRadius](https://create.roblox.com/docs/reference/engine/classes/Player#SimulationRadius). Each physically simulated
object will check to see which player is closest to that object, and if
they are within the player's simulation radius. If both conditions are
met, that player will becomes the network owner of that object.