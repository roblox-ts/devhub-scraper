Creates a [`Path`](https://create.roblox.com/docs/reference/engine/classes/Path) object based on various agent parameters. Valid
keys and values in the `agentParameters` table are as follows:
| Key | Type | Default | Description |
| - | - | - | - |
| **AgentRadius** | integer | 2 | Determines the minimum amount of horizontal space required
            for empty space to be considered traversable. |
| **AgentHeight** | integer | 5 | Determines the minimum amount of vertical space required
            for empty space to be considered traversable. |
| **AgentCanJump** | boolean | true | Determines whether jumping during pathfinding is
            allowed. |
| **AgentCanClimb** | boolean | false | Determines whether climbing [`TrussParts`](https://create.roblox.com/docs/reference/engine/classes/TrussPart)
            during pathfinding is allowed. |
| **WaypointSpacing** | number | 4 | Determines the spacing between intermediate waypoints in
            path. |
| **Costs** | table | {} | Table of materials or defined
            [`PathfindingModifiers`](https://create.roblox.com/docs/reference/engine/classes/PathfindingModifier) and their
            "cost" for traversal. Useful for making the agent prefer
            certain materials/regions over others. See [here](https://create.roblox.com/docs/characters/pathfinding#pathfinding-modifiers) for details. |