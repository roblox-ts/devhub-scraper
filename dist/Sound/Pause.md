Sets [`Sound.Playing`](https://create.roblox.com/docs/reference/engine/classes/Sound#Playing) to false. This pauses the playback of the
[`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) if the sound is playing. Unlike [`Sound:Stop()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Stop) it does
not reset [`Sound.TimePosition`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimePosition) meaning the sound can be resumed
using [`Sound:Resume()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Resume).

The impact of the different Sound functions on [`Sound.Playing`](https://create.roblox.com/docs/reference/engine/classes/Sound#Playing) and
[`Sound.TimePosition`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimePosition) are shown below.
  | Function | Sound.Playing | Sound.TimePosition |
| - | - | - |
| Sound:Play() | True | Last value set in Lua (default 0) |
| Sound:Pause() | False | - |
| Sound:Resume() | True | - |
| Sound:Stop() | False | 0 |