This function returns `SoundService|SoundService's` current listener type and what is set as listener.

The first result returned is the [ListenerType](https://developer.roblox.com/en-us/api-reference/enum/ListenerType) of the listener, the second result is dependent on the ListenerType:

ListenerType

Description

Enum.ListenerType.Camera

Does not return a listener object as [Workspace.CurrentCamera](https://developer.roblox.com/en-us/api-reference/property/Workspace/CurrentCamera) is always used

Enum.ListenerType.CFrame

Returns the [CFrame](https://developer.roblox.com/en-us/api-reference/datatype/CFrame) used in [SoundService:SetListener](https://developer.roblox.com/en-us/api-reference/function/SoundService/SetListener)

Enum.ListenerType.ObjectPosition

Returns the [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart) used in [SoundService:SetListener](https://developer.roblox.com/en-us/api-reference/function/SoundService/SetListener)

Enum.ListenerType.ObjectCFrame

Returns the BasePart used in SetListener()

The listener can be changed using [SoundService:SetListener](https://developer.roblox.com/en-us/api-reference/function/SoundService/SetListener).

local SoundService = game:GetService("SoundService")
SoundService:SetListener(Enum.ListenerType.CFrame, CFrame.new(0, 0, 0))
local listenerType, listener = SoundService:GetListener()
print(listenerType, listener)

What is a listener?
-------------------

The listener determines the point from which audio in the game is being 'heard' by the player. For 3D [Sounds](https://developer.roblox.com/en-us/api-reference/class/Sound) (Sounds parented to a BasePart or [Attachment](https://developer.roblox.com/en-us/api-reference/class/Attachment)) the listener influences the volume and left/right balance of a playing sound. Listeners have no influence on the playback of 2D sounds as they have no position of emission.

By default, the listener is set to the CurrentCamera. However, a range of different types of listeners can be used.