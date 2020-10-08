This property selects the [HumanoidCollisionType](https://developer.roblox.com/en-us/api-reference/enum/HumanoidCollisionType) for R15 and Rthro non-player characters.

The collision geometry for the InnerBox type is calculated at run-time and will not be applied in Studio when the simulation is not running.

For player [Characters](https://developer.roblox.com/en-us/api-reference/property/Player/Character) the CollisionType property will be decided by the Avatar Collision Option in Game Settings.

![Collision Options in Game Settings](https://developer.roblox.com/assets/blt609585adde792b19/HumanoidCollisionType.jpg)

This property is writable by [Plugins](https://developer.roblox.com/en-us/api-reference/class/Plugin) and can be read by all scripts.

### Enums

Name

Value

Description

### OuterBox

0

Dynamically sized collision boxes based on mesh sizes

### Innerbox

1

Fixed size collision boxes, similar to the classic avatar collision