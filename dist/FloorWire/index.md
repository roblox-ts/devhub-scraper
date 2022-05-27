A FloorWire attempts to make a wire from two of its properties:
[FloorWire.From](https://create.roblox.com/docs/reference/engine/classes/FloorWire#From) and [FloorWire.To](https://create.roblox.com/docs/reference/engine/classes/FloorWire#To), which both need to be set to a
[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart). It sometimes goes through bricks but the majority of the time it
works fine. It starts at From's center and goes to To's center. Which side of
each one it goes into depends on the BaseParts's positions. It chooses the
fastest route.