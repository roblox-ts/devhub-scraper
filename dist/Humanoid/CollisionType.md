This property selects the [HumanoidCollisionType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidCollisionType) for R15 and Rthro
non-player characters.

The collision geometry for the InnerBox type is calculated at run-time and
will not be applied in Studio when the simulation is not running.

For player [Characters](https://create.roblox.com/docs/reference/engine/classes/Player#Character) the CollisionType property will
be decided by the Avatar Collision Option in Game Settings.

![Collision Options in Game Settings][1]

This property is writable by [Plugins](https://create.roblox.com/docs/reference/engine/classes/Plugin) and can be read by all
scripts.

#### Enums

| Name                  | Value | Description                                                         |
| --------------------- | ----- | ------------------------------------------------------------------- |
| 
				**OuterBox**
			 | 0     | Dynamically sized collision boxes based on mesh sizes               |
| 
				**Innerbox**
			 | 1     | Fixed size collision boxes, similar to the classic avatar collision |


[1]: https://prod.docsiteassets.roblox.com/assets/blt609585adde792b19/HumanoidCollisionType.jpg