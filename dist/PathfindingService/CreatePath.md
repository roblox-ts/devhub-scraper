Creates a [Path](https://developer.roblox.com/en-us/api-reference/class/Path) object based on various agent parameters (see below).

Agent parameters
----------------

Key

Type

Default

Description

**AgentRadius**

integer

2

Determines the minimum amount of horizontal space required for empty space to be considered traversable.

**AgentHeight**

integer

5

Determines the minimum amount of vertical space required for empty space to be considered traversable.

**AgentCanJump**

boolean

true

Determines whether off-mesh links for jumping are allowed.

**WaypointSpacing**

number

4

Determines the spacing between intermediate waypoints in path.

**Costs**

table

{}

Table of materials or defined [PathfindingModifiers](https://developer.roblox.com/en-us/api-reference/class/PathfindingModifier) and their "cost" for traversal. Useful for making the agent prefer certain materials/regions over others.

Pathfinding Costs
-----------------

By default, all walkable (navmesh) areas have a pathfinding cost of 1.0 (jumps have a cost of 4.0), which is exactly how pathfinding worked before the introduction of [PathfindingModifiers](https://developer.roblox.com/en-us/api-reference/class/PathfindingModifier).

Since not all characters have the same movement abilities or constraints, it is desirable to provide a way to customize them. For example, a regular car always wants to avoid water, while an amphibian vehicle might not have such restriction.

To assign different pathfinding costs to different named areas/volumes and/or materials, for a particular AI character (including the player character in the Click to Move mode), just add an optional parameter `Costs` of type dictionary to CreatePath(.). It maps Pathfinding Modifier areas/volumes and materials to their pathfinding costs. For example:

local path = PathfindingService:CreatePath{
    AgentRadius = agentRadius,
    AgentHeight = agentHeight,
    AgentCanJump = agentCanJump,

    -- New parameter --
    Costs = {
        Grass = 10
    }
}

See the [Pathfinding](https://developer.roblox.com/en-us/articles/Pathfinding) guide for details and examples on using pathfinding in Roblox.