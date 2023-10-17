This property determines when elastic scrolling is allowed. It can be used
to dictate if and when the [`ScrollingFrame`](https://create.roblox.com/docs/reference/engine/classes/ScrollingFrame) canvas is elastic.
Defaults to WhenScrollable.
#### What's the Differences Between Elastic and Non-Elastic
##### Elastic

The image below demonstrates Enum.Elasticity.Always an
Enum.Elasticity.WhenScrollable when the canvas is scrollable:

![Enum.Elasticity.Always](https://prod.docsiteassets.roblox.com/assets/legacy/ElasticityAlways.gif)
##### Non-Elastic

The image below demonstrates Enum.Elasticity.Never:
![Enum.Elasticity.Never](https://prod.docsiteassets.roblox.com/assets/legacy/ElasticityNever.gif)
#### Enums

It can be set to several `Enum.ElasticBehavior` enum values, which
determine how elastic scrolling behaves:
| Name | Description |
| - | - |
| Always | Regardless of scrolling, you can always move the canvas a bit outside the bounds |
| Never | You can never move the canvas outside the rect bounds |
| WhenScrollable | (default) Elastic scrolling is allowed when canvas size is larger than the rect size |

See also:

- [`ScrollingFrame.ScrollingDirection`](https://create.roblox.com/docs/reference/engine/classes/ScrollingFrame#ScrollingDirection), the direction scrolling is
allowed in this scrolling frame