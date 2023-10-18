Sets the listener used by the client.

The first parameter is the [`Enum.ListenerType`](https://create.roblox.com/docs/reference/engine/enums/ListenerType) of the listener, the second
paramater is dependent on the listener type.

- Camera ListenerType - Does not return a listener object as
[`Workspace.CurrentCamera`](https://create.roblox.com/docs/reference/engine/classes/Workspace#CurrentCamera) is always used
- CFrame ListenerType - The [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) to be used
- ObjectPosition ListenerType - The [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart) to be used
- ObjectCFrame ListenerType - The BasePart to be used

The listener can be retrieved using [`SoundService:GetListener()`](https://create.roblox.com/docs/reference/engine/classes/SoundService#GetListener):
```lua
local SoundService = game:GetService("SoundService")
SoundService:SetListener(Enum.ListenerType.CFrame, CFrame.new(0, 0, 0))
local listenerType, listener = SoundService:GetListener()
print(listenerType, listener)
```
#### What is a listener?

The [`SoundService`](https://create.roblox.com/docs/reference/engine/classes/SoundService)'s listener determines the point from which audio
in the game is being 'heard' by the player. For 3D `Sounds` (sounds
parented to a BasePart or [`Attachment`](https://create.roblox.com/docs/reference/engine/classes/Attachment)) the listener influences the
volume and left/right balance of a playing sound. Listeners have no
influence on the playback of 2D sounds as they have no position of
emission.

By default, the listener is set to the CurrentCamera. However, a range of
different types of listeners can be used.