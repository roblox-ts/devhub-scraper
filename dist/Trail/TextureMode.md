A [`Trail`](https://create.roblox.com/docs/reference/engine/classes/Trail)'s TextureMode property determines how the effect's
[`Trail.Texture`](https://create.roblox.com/docs/reference/engine/classes/Trail#Texture) (if any) is drawn. The behavior of the texture in
each mode is also very much dependent on the effect's
[`Trail.TextureLength`](https://create.roblox.com/docs/reference/engine/classes/Trail#TextureLength) property. Note that changing an effect's
TextureMode after some of the trail has been drawn will affect all of the
previously drawn segments.

TextureMode defaults to Stretch.
#### Stretch

Stretch is the default TextureMode for Trails. In this mode the texture
will be tiled a number of times equal to the number defined by
TextureLength. It will stretch these tiles evenly to fit the entire length
of the drawn trail. For example, if TextureLength is set to 4 then the
texture will always repeat 4 times in the trail, no matter how long or
short the trail is.

![Demonstrating a trail texture using the stretch mode.](https://prod.docsiteassets.roblox.com/assets/legacy/TrailStretch.gif)
#### Wrap

In the Wrap mode, the texture will start at the attachment points and will
move as the attachments move. As soon as the attachments have moved a
number of studs equal to the TextureLength, then the texture will repeat.
The longer the trail is, the more times the texture will repeat.

![Demonstrating a trail texture using the wrap mode.](https://prod.docsiteassets.roblox.com/assets/legacy/TrailWrap.gif)
#### Static

In the Static mode, the texture will start at the initial position of the
trail and will be drawn as the attachments move. Once the attachments move
a number of studs equal to the TextureLength, then the texture will
repeat.

![Demonstrating a trail texture using the static mode.](https://prod.docsiteassets.roblox.com/assets/legacy/TrailStatic.gif)