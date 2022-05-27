This property determines if the part will trigger
[Touched](https://create.roblox.com/docs/reference/engine/classes/BasePart#Touched)/[TouchEnded](https://create.roblox.com/docs/reference/engine/classes/BasePart#TouchEnded) events on
other [BaseParts](https://create.roblox.com/docs/reference/engine/classes/BasePart) with [TouchTransmitters](https://create.roblox.com/docs/reference/engine/classes/TouchTransmitter). By
default, the value is set to `true`.

A BasePart's Touched or TouchEnded event will only fire if otherPart has
CanTouch set to `true`.

When `false`, a touch event cannot be setup for the part. Attempting to do
so will throw an error. If the property is set to `false` after a touch
event is connected, the event will be disconnected and TouchTransmitter
removed.

The two images below demonstrate how the property behaves using a
non-colliding part with a script telling it to turn green when touched.
First, on the left, we drop parts that are CanTouch. On the right, we drop
parts that are not CanTouch.

![undefined](https://prod.docsiteassets.roblox.com/assets/blt9724b5f5805063af/CanTouchTrue.gif)

![undefined](https://prod.docsiteassets.roblox.com/assets/blt19029b16ced82902/CanTouchFalse.gif)

#### Collision Groups

This collision logic can be enabled and disabled for
[Collision Groups](https://create.roblox.com/docs/reference/engine/classes/Collision Filtering) using the
[Workspace.TouchesUseCollisionGroups](https://create.roblox.com/docs/reference/engine/classes/Workspace#TouchesUseCollisionGroups) property. In this case, when
TouchesUseCollisionGroups is `true` parts in different groups set to not
collide will ignore collisions and touch events - thereby ignoring this
property

#### Performance

There is a small performance gain on parts that have both CanTouch and
[CanCollide](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanCollide) set to `false`, as these parts will never
need to compute any kind of part to part collisions. However, they can
still be hit by [Raycasts](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#Raycast) and
[Region3](https://developer.roblox.com/en-us/api-reference/datatype/Region3) queries.