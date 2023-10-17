The ResizeIncrement property is a read-only property that describes the
smallest change in size allowable by the [`BasePart:Resize()`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Resize) method.
It differs between implementations of the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) abstract class.
For instance, [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part) has this set to 1 and [`TrussPart`](https://create.roblox.com/docs/reference/engine/classes/TrussPart) has
this set to 2 (since individual truss sections are 2x2x2 in size).