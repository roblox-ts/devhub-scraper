Determines the size [BillboardGui.CurrentDistance](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#CurrentDistance) increments and
decrements in studs as the player's camera moves closer and further from
the [BillboardGui](https://create.roblox.com/docs/reference/engine/classes/BillboardGui). The property defaults to 0 and rounds up starting from
[BillboardGui.DistanceLowerLimit](https://create.roblox.com/docs/reference/engine/classes/BillboardGui#DistanceLowerLimit).

For example, if this property is set to 0.5 and the player's camera is
moving away from the gui starting from 0 then CurrentDistance will
increase 0 -> 0.5 -> 1 -> 1.5 -> ... and so forth.