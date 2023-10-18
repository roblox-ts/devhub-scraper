This function returns [`SoundService's`](https://create.roblox.com/docs/reference/engine/classes/SoundService) current listener
type and what is set as listener.

The first result returned is the [`Enum.ListenerType`](https://create.roblox.com/docs/reference/engine/enums/ListenerType) of the listener, the
second result is dependent on the ListenerType:
| ListenerType | Description |
| - | - |
| [`Enum.ListenerType`](https://create.roblox.com/docs/reference/engine/enums/ListenerType) | Does not return a listener object as `Workspace/CurrentCamera` is always used |
| [`Enum.ListenerType`](https://create.roblox.com/docs/reference/engine/enums/ListenerType) | Returns the [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) used in [`SoundService:SetListener()`](https://create.roblox.com/docs/reference/engine/classes/SoundService#SetListener) |
| [`Enum.ListenerType`](https://create.roblox.com/docs/reference/engine/enums/ListenerType) | Returns the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) used in [`SoundService:SetListener()`](https://create.roblox.com/docs/reference/engine/classes/SoundService#SetListener) |
| [`Enum.ListenerType`](https://create.roblox.com/docs/reference/engine/enums/ListenerType) | Returns the [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) used in [`SoundService:SetListener()`](https://create.roblox.com/docs/reference/engine/classes/SoundService#SetListener) |

The listener can be changed using [`SoundService:SetListener()`](https://create.roblox.com/docs/reference/engine/classes/SoundService#SetListener).
```lua
local SoundService = game:GetService("SoundService")
SoundService:SetListener(Enum.ListenerType.CFrame, CFrame.new(0, 0, 0))
local listenerType, listener = SoundService:GetListener()
print(listenerType, listener)
```
#### What is a listener?

The listener determines the point from which audio in the game is being
'heard' by the player. For 3D [`Sounds`](https://create.roblox.com/docs/reference/engine/classes/Sound) (Sounds parented to a
BasePart or [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment)) the listener influences the volume and
left/right balance of a playing sound. Listeners have no influence on the
playback of 2D sounds as they have no position of emission.

By default, the listener is set to the CurrentCamera. However, a range of
different types of listeners can be used.