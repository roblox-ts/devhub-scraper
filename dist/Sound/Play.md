Plays the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound). Sets [`Sound.TimePosition`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimePosition) to the last value
set by a [`Script`](https://create.roblox.com/docs/reference/engine/classes/Script) (or 0 if it has not been set), and then sets
[`Sound.Playing`](https://create.roblox.com/docs/reference/engine/classes/Sound#Playing) to true.

The impact of the different [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) functions on
[`Sound.Playing`](https://create.roblox.com/docs/reference/engine/classes/Sound#Playing) and [`Sound.TimePosition`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimePosition) are shown below.
  | Function | Sound.Playing | Sound.TimePosition |
| - | - | - |
| Sound:Play() | True | Last value set in Lua (default 0) |
| Sound:Pause() | False | - |
| Sound:Resume() | True | - |
| Sound:Stop() | False | 0 |