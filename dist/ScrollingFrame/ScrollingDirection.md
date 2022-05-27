This property determines the direction scrolling is allowed. If scrolling
is disallowed in a direction, the scrollbar will not appear. Defaults to
XY.

#### What are the Different Scrolling Directions

##### XY (Default)

The image below demonstrates Enum.ScrollingDirection.XY:
![Enum.ScrollingDirection.XY][1]

##### X

The image below demonstrates Enum.ScrollingDirection.X:
![Enum.ScrollingDirection.X][2]

##### Y

The image below demonstrates Enum.ScrollingDirection.Y:
![Enum.ScrollingDirection.Y][3]

#### Enums

It can be set to several [ScrollingDirection](https://developer.roblox.com/en-us/api-reference/enum/ScrollingDirection) enum values, which
determine how elastic scrolling behaves:

| Name | Description                                              |
| ---- | -------------------------------------------------------- |
| XY   | (default) Canvas can be scrolled along both X and Y axes |
| X    | Canvas can only be scrolled along the X axis             |
| Y    | Canvas can only be scrolled along the Y axis             |


See also:

- [ScrollingFrame.ElasticBehavior](https://create.roblox.com/docs/reference/engine/classes/ScrollingFrame#ElasticBehavior), how elastic scrolling behaves for
  touch input

[1]: https://prod.docsiteassets.roblox.com/assets/blt678b1bc5d1f6beb8/ScrollingDirectionXY.gif
[2]: https://prod.docsiteassets.roblox.com/assets/blta0d180b895c30110/ScrollingDirectionX.gif
[3]: https://prod.docsiteassets.roblox.com/assets/blta95d990f00ed1417/ScrollingDirectionY.gif