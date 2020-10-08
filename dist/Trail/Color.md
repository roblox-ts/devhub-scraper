The color of a [Trail](https://developer.roblox.com/en-us/api-reference/class/Trail) can be set with the effect's Color property. This property determines what color the segments of the trail will have through their [Trail.Lifetime](https://developer.roblox.com/en-us/api-reference/property/Trail/Lifetime).

Color is a [ColorSequence](https://developer.roblox.com/en-us/api-reference/datatype/ColorSequence), which means that the segments in a trail can shift between several colors. Note that if the color for a trail changes after some of the trail segments have been drawn, all of the old segments will be updated to match the new colors.

If a trail has a [Trail.Texture](https://developer.roblox.com/en-us/api-reference/property/Trail/Texture) then the Color property will tint that texture.

![Trails with tinted textures](https://developer.roblox.com/assets/blt9f587dabe55772ed/TrailTextureColor.png)

Any transparent components of a texture will not be tinted.