When true, the [`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) will play when it is removed from the game.

Note the sound will play when the [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) property of the
[`Sound`](https://create.roblox.com/docs/reference/engine/classes/Sound) or one of its ancestors is set to nil. This means all of the
following will cause the sound to play when PlayOnRemove is true. Note,
this includes [`Instance:Destroy()`](https://create.roblox.com/docs/reference/engine/classes/Instance#Destroy) as the destroy function sets the
parent to nil.
```lua
sound:Destroy()
sound.Parent = nil
sound.Parent.Parent = nil
```