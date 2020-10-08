Sets the current offset of the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam)'s texture cycle.

The offset of a [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam)s texture cycle represents the progress of the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam)s texture animation. Hence, a [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam)'s texture cycle can be reset as follows:

```Lua
beam:SetTextureOffset(0)
``` 

Where manual control is not required over the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam)'s texture cycle, [Beam.TextureSpeed](https://developer.roblox.com/en-us/api-reference/property/Beam/TextureSpeed) can be used instead to animate the [Beam](https://developer.roblox.com/en-us/api-reference/class/Beam). Although, for illustrative purposes, a similar function can be achieved with SetTextureOffset.

```Lua
local RunService = game:GetService("RunService")
while true do
	for i = 1, 0, -0.01 do
		RunService.RenderStepped:Wait()
		beam:SetTextureOffset(i)
	end	
end
``` 

Notes
-----

*   The given offset parameter is expected to be a value between 0 and 1, but greater values can still be used
*   The texture cycle wraps at 0 and 1, meaning the texture is in the same position when the offset is 0 or at 1
*   If the [Beam.Texture](https://developer.roblox.com/en-us/api-reference/property/Beam/Texture) property is not set, this function will do nothing
*   Increasing the offset will act in the inverse direction to the [Beam.TextureSpeed](https://developer.roblox.com/en-us/api-reference/property/Beam/TextureSpeed) property. Meaning, it will move the texture in the opposite direction to the direction the texture animates when [Beam.TextureSpeed](https://developer.roblox.com/en-us/api-reference/property/Beam/TextureSpeed) is more than 0