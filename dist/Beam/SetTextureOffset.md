Sets the current offset of the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)'s texture cycle.

The offset of a [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)s texture cycle represents the progress of the
[`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)s texture animation. Hence, a [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)'s texture cycle can
be reset as follows:
```lua
beam:SetTextureOffset(0)
```

Where manual control is not required over the [`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam)'s texture
cycle, [`Beam.TextureSpeed`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureSpeed) can be used instead to animate the
[`Beam`](https://create.roblox.com/docs/reference/engine/classes/Beam). Although, for illustrative purposes, a similar function can
be achieved with SetTextureOffset.
```lua
local RunService = game:GetService("RunService")
while true do
	for i = 1, 0, -0.01 do
		RunService.RenderStepped:Wait()
		beam:SetTextureOffset(i)
	end
end
```

Note:

- The given offset parameter is expected to be a value between 0 and 1,
but greater values can still be used
- The texture cycle wraps at 0 and 1, meaning the texture is in the same
position when the offset is 0 or at 1
- If the [`Beam.Texture`](https://create.roblox.com/docs/reference/engine/classes/Beam#Texture) property is not set, this function will do
nothing
- Increasing the offset will act in the inverse direction to the
[`Beam.TextureSpeed`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureSpeed) property. Meaning, it will move the texture in
the opposite direction to the direction the texture animates when
[`Beam.TextureSpeed`](https://create.roblox.com/docs/reference/engine/classes/Beam#TextureSpeed) is more than 0