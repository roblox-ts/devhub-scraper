Creates a [Path](https://developer.roblox.com/en-us/api-reference/class/Path) object based on various agent parameters (see below).

Agent Parameters
----------------

Key

Type

Default

Description

**AgentRadius**

integer

2

Humanoid radius. Used to determine the minimum separation from obstacles.

**AgentHeight**

integer

5

Humanoid height. Empty space smaller than this value will be marked as non-traversable, for instance the space under stairs.

**AgentCanJump**

boolean

true

Sets whether off-mesh links for jumping are allowed.

See the `Articles/Pathfinding|Pathfinding` guide for details and examples on using pathfinding in Roblox.