Pathfinding modifiers can be used to represent space that has a higher or
lower cost to be traversed. When added as a child to a [`Part`](https://create.roblox.com/docs/reference/engine/classes/Part), it takes
that Part's volume to annotate areas of the navmesh that are inside and on top
of it.

You can include pathfinding modifiers in the
[`PathfindingService:CreatePath()`](https://create.roblox.com/docs/reference/engine/classes/PathfindingService#CreatePath) parameters and compute smarter paths
across various materials or around defined regions.

Note that when adding a [`PathfindingModifier`](https://create.roblox.com/docs/reference/engine/classes/PathfindingModifier) to a part, **either**:

- The part is [`collidable`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanCollide) and we are interested in
modifying pathfinding costs of paths on top of this part, which we call
**area**.
- The part is [`non-collidable`](https://create.roblox.com/docs/reference/engine/classes/BasePart#CanCollide) (and usually
invisible in game) and we are interested in modifying pathfinding costs of
paths inside the part, which we call **volume**.