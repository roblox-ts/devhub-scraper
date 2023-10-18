This function returns an array of [`InputObjects`](https://create.roblox.com/docs/reference/engine/classes/InputObject)
corresponding to the mouse buttons currently being pressed down.

Mouse buttons that are tracked by this function include:
| Name | Description |
| - | - |
| MouseButton1 | The left mouse button. |
| MouseButton2 | The right mouse button. |
| MouseButton3 | The middle mouse button. |

If the user is not pressing any mouse button down when the function is
called, it will return an empty array.

As [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService) is client-side only, this function can only be
used in a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript).