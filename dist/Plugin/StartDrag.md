**StartDrag** initiates a drag action using a dictionary of parameters.
The parameters are as follows:
| Name | Type | Default | Description |
| - | - | - | - |
| Sender | string | `""` | Identifies the source of the drag action to the drop target |
| MimeType | string | `""` | The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) of Data. |
| Data | string | `""` | Information about the drag action (eg. what is being dragged). Should be used by the drop target. |
| MouseIcon | Content | `""` | The icon to use for the mouse cursor during the drag. If empty, uses the default cursor. |
| DragIcon | Content | `""` | An image to render under the mouse cursor during the drag. This should represent the item being dragged. |
| HotSpot | Vector2 | `Vector2.new(0, 0)` | The pixel offset from the top-left where the cursor should "hold" the DragIcon. |

See also:

- [`PluginGui.PluginDragEntered`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragEntered)
- [`PluginGui.PluginDragMoved`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragMoved)
- [`PluginGui.PluginDragDropped`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragDropped)
- [`PluginGui.PluginDragLeft`](https://create.roblox.com/docs/reference/engine/classes/PluginGui#PluginDragLeft)