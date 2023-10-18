Resumes the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound). Sets [`Sound.Playing`](https://create.roblox.com/docs/reference/engine/classes/Sound#Playing) to true. Does not
alter [`Sound.TimePosition`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimePosition) and thus can be used to resume the
playback of a sound stopped using [`Sound:Pause()`](https://create.roblox.com/docs/reference/engine/classes/Sound#Pause).

The impact of the different sound functions on [`Sound.Playing`](https://create.roblox.com/docs/reference/engine/classes/Sound#Playing) and
[`Sound.TimePosition`](https://create.roblox.com/docs/reference/engine/classes/Sound#TimePosition) are shown below.
  | Function | Sound.Playing | Sound.TimePosition |
| - | - | - |
| Sound:Play() | True | Last value set in Lua (default 0) |
| Sound:Pause() | False | - |
| Sound:Resume() | True | - |
| Sound:Stop() | False | 0 |