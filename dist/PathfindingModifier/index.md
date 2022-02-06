For a more detailed overview of the [PathfindingService](https://developer.roblox.com/en-us/api-reference/class/PathfindingService) and [PathfindingModifiers](https://developer.roblox.com/en-us/api-reference/class/PathfindingModifier), see the [Pathfinding](https://developer.roblox.com/en-us/articles/pathfinding) article.

Pathfinding modifiers can be used to represent space that has a higher or lower cost to be traversed. When added as a child to a [Part](https://developer.roblox.com/en-us/api-reference/class/Part), it takes that Part's volume to annotate areas of the navmesh that are inside and on top of it.

You can include pathfinding modifiers in the [PathfindingService:CreatePath](https://developer.roblox.com/en-us/api-reference/function/PathfindingService/CreatePath) parameters and compute smarter paths across various materials or around defined regions.

Note that when adding a [PathfindingModifier](https://developer.roblox.com/en-us/api-reference/class/PathfindingModifier) to a part, **either**:

1.  The part is [collidable](https://developer.roblox.com/en-us/api-reference/property/BasePart/CanCollide) and we are interested in modifying pathfinding costs of paths on top of this part, which we call **area**.
2.  The part is [non-collidable](https://developer.roblox.com/en-us/api-reference/property/BasePart/CanCollide) (and usually invisible in game) and we are interested in modifying pathfinding costs of paths inside the part, which we call **volume**.