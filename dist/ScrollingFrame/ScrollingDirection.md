This property determines the direction scrolling is allowed. If scrolling
is disallowed in a direction, the scrollbar will not appear. Defaults to
XY.
#### What are the Different Scrolling Directions
##### XY (Default)

The image below demonstrates Enum.ScrollingDirection.XY:

![Enum.ScrollingDirection.XY](https://prod.docsiteassets.roblox.com/assets/legacy/ScrollingDirectionXY.gif)
##### X

The image below demonstrates Enum.ScrollingDirection.X:

![Enum.ScrollingDirection.X](https://prod.docsiteassets.roblox.com/assets/legacy/ScrollingDirectionX.gif)
##### Y

The image below demonstrates Enum.ScrollingDirection.Y:

![Enum.ScrollingDirection.Y](https://prod.docsiteassets.roblox.com/assets/legacy/ScrollingDirectionY.gif)
#### Enums

It can be set to several `Enum.ScrollingDirection` enum values, which
determine how elastic scrolling behaves:
| Name | Description |
| - | - |
| XY | (default) Canvas can be scrolled along both X and Y axes |
| X | Canvas can only be scrolled along the X axis |
| Y | Canvas can only be scrolled along the Y axis |

See also:

- [`ScrollingFrame.ElasticBehavior`](https://create.roblox.com/docs/reference/engine/classes/ScrollingFrame#ElasticBehavior), how elastic scrolling behaves
for touch input