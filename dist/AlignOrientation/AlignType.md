The [AlignType](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#AlignType) specifies the desired
relationship between the primary axes of the
[Attachment0](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#Attachment0) and the goal. The constraint
will try to maintain this relationship by applying forces within specified
limits.

This property is visible in Studio and meaningful only when
[AlignOrientation.PrimaryAxisOnly](https://create.roblox.com/docs/reference/engine/classes/AlignOrientation#PrimaryAxisOnly) is set _true_.

#### Enums

It can be set to any of the possible [AlignType](https://developer.roblox.com/en-us/api-reference/enum/AlignType) values.

| Name              | Value | Description            |
| ----------------- | ----- | ---------------------- |
| **Parallel**      | 0     | Two parallel axes      |
| **Perpendicular** | 1     | Two perpendicular axes |