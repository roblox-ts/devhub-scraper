The [`LocalTransparencyModifier`](https://create.roblox.com/docs/reference/engine/classes/BasePart#LocalTransparencyModifier)
property is a multiplier to [`BasePart.Transparency`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Transparency) that is only
visible to the local client. It does not replicate from client to server
and is useful for when a part should not render for a specific client,
such as how the player does not see their character's body parts when they
zoom into first person mode.

This property modifies the local part's transparency through the following
formula, with resulting values clamped between 0 and 1.
```lua
clientTransparency = 1 - ((1 - part.Transparency) * (1 - part.LocalTransparencyModifier))
```
| Transparency | LocalTransparencyModifier | Server-Side Transparency | Client-Side Transparency |
| - | - | - | - |
| 0.5 | 0 | 0.5 | 0.5 |
| 0.5 | 0.25 | 0.5 | 0.625 |
| 0.5 | 0.5 | 0.5 | 0.75 |
| 0.5 | 0.75 | 0.5 | 0.875 |
| 0.5 | 1 | 0.5 | 1 |