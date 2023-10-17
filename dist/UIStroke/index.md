For more details on the **UIStroke** object, see
[here](https://create.roblox.com/docs/ui/layout-and-appearance#uistroke).

An instance that applies an outline to text or a UI border. Key features
include:

- Adjust the color and thickness of the stroke outline.
- Change the stroke transparency independently from the text or UI object.
- Choose the corner style of the stroke (round, bevel, or miter).
- Add a gradient to the stroke via the [`UIGradient`](https://create.roblox.com/docs/reference/engine/classes/UIGradient) instance.
- Use rich text tags to add stroke to inline text segments.

## Rich Text

If your text object has [rich text](https://create.roblox.com/docs/ui/rich-text) enabled, you can
control stroke properties on segments of the string via the `<stroke>` tag.
| Property | Description | Default |
| - | - | - |
| `color` | Sets the stroke [color](https://create.roblox.com/docs/#color-gradient). | `rgb(0, 0, 0)` |
| `joins` | Sets the [corner style](https://create.roblox.com/docs/#corner-style). Can be set to `round`, `bevel`, or
            `miter`. | `round` |
| `thickness` | Sets the stroke [thickness](https://create.roblox.com/docs/#thickness). | `1` |
| `transparency` | Sets the stroke [transparency](https://create.roblox.com/docs/#transparency). | `0` |

```lua
The &lt;font color="#c80032"&gt;<mark
  >&lt;stroke color="#fcc633" thickness="4"&gt;dragon&lt;/stroke&gt;</mark
>&lt;/font&gt; is hungry.
```
![undefined](https://prod.docsiteassets.roblox.com/assets/legacy/Stroke-RichText.png)