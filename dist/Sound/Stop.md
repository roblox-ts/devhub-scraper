Stops the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound). Sets [`Sound.Playing`](https://create.roblox.com/docs/reference/engine/classes/Sound#Playing) to false then sets
[`Sound.TimePosition`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimePosition) to 0.

The impact of the different sound functions on [`Sound.Playing`](https://create.roblox.com/docs/reference/engine/classes/Sound#Playing) and
[`Sound.TimePosition`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimePosition) are shown below.
  | Function | Sound.Playing | Sound.TimePosition |
| - | - | - |
| Sound:Play() | True | Last value set in Lua (default 0) |
| Sound:Pause() | False | - |
| Sound:Resume() | True | - |
| Sound:Stop() | False | 0 |