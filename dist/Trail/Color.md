The color of a [`Trail`](https://create.roblox.com/docs/reference/engine/classes/Trail) can be set with the effect's Color property.
This property determines what color the segments of the trail will have
through their [`Trail.Lifetime`](https://create.roblox.com/docs/reference/engine/classes/Trail#Lifetime).

Color is a [`ColorSequence`](https://create.roblox.com/docs/reference/engine/datatypes/ColorSequence), which means that the segments in a
trail can shift between several colors. Note that if the color for a trail
changes after some of the trail segments have been drawn, all of the old
segments will be updated to match the new colors.

If a trail has a [`Trail.Texture`](https://create.roblox.com/docs/reference/engine/classes/Trail#Texture) then the Color property will tint
that texture.

![Trails with tinted textures](https://prod.docsiteassets.roblox.com/assets/legacy/TrailTextureColor.png)

Any transparent components of a texture will not be tinted.