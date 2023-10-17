This property determines if [`Touched`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Touched) and
[`TouchEnded`](https://create.roblox.com/docs/reference/engine/classes/BasePart#TouchEnded) events fire on the part. If `true`,
other touching parts must also have [`CanTouch`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanTouch) set
to `true` for touch events to fire. If `false`, touch events cannot be set
up for the part and attempting to do so will throw an error. Similarly, if
the property is set to `false` after a touch event is connected, the event
will be disconnected and the [`TouchTransmitter`](https://create.roblox.com/docs/reference/engine/classes/TouchTransmitter) removed.

Note that this collision logic can be set to respect
[collision groups](https://create.roblox.com/docs/workspace/collisions#collision-filtering)
through the [`Workspace.TouchesUseCollisionGroups`](https://create.roblox.com/docs/reference/engine/classes/Workspace#TouchesUseCollisionGroups) property. If
`true`, parts in non-colliding groups will ignore both collisions **and**
touch events, thereby making this property irrelevant.
#### Performance

There is a small performance gain on parts that have both
[`CanTouch`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanTouch) and
[`CanCollide`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanCollide) set to `false`, as these parts will
never need to compute any kind of part to part collisions. However, they
can still be hit by [`Raycasts`](https://create.roblox.com/docs/reference/engine/classes/WorldRoot#Raycast) and
`Datatype.OverlapParams` queries.