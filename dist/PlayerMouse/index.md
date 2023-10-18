The PlayerMouse behaves identically to the [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) object that is
obtained using [`Tool.Equipped`](https://create.roblox.com/docs/reference/engine/classes/Tool#Equipped). It can be accessed from
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript)s using the local player's [`Player:GetMouse()`](https://create.roblox.com/docs/reference/engine/classes/Player#GetMouse)
method. Both PlayerMouse and [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) are legacy APIs, superseded by
[`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService).

The only difference between the PlayerMouse and the [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) object is
the PlayerMouse can be obtained using the [`Player:GetMouse()`](https://create.roblox.com/docs/reference/engine/classes/Player#GetMouse) method.

In most cases developers are advised to use the new [`UserInputService`](https://create.roblox.com/docs/reference/engine/classes/UserInputService).
However the PlayerMouse and Mouse objects remain supported for a number of
reasons. See [Input and Camera](https://create.roblox.com/docs/input) for more information
on customizing inputs in your experience.