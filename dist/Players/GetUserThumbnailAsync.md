This function fetches a [content URL](https://developer.roblox.com/en-us/articles/Content) of an image of a player's avatar given their [UserId](https://developer.roblox.com/en-us/api-reference/property/Player/UserId), the image size (as an enum) and type (also an enum: avatar, bust, headshot). It also returns a bool describing if the image is ready to be used.

Most often, this method is used with [ImageLabel.Image](https://developer.roblox.com/en-us/api-reference/property/ImageLabel/Image) to display player pictures next to their username in-game. It is also appropriate for [Decal.Texture](https://developer.roblox.com/en-us/api-reference/property/Decal/Texture) as well.

Available Sizes
---------------

`Enum.ThumbnailSize`: `Size48x48`, `Size60x60`, `Size100x100`, `Size150x150`, `Size180x180`, `Size353x353`, `Size420x420`

Types of User Thumbnails
------------------------

Enum.ThumbnailType

Description

Example (60px)

`AvatarBust`

Upper chest and head

![](https://www.roblox.com/bust-thumbnail/image?userId=269323&width=60&height=60&format=png)

`AvatarThumbnail`

Entire avatar

![](https://www.roblox.com/avatar-thumbnail/image?userId=269323&width=60&height=60&format=png)

`HeadShot`

Just the head and face

![](https://www.roblox.com/headshot-thumbnail/image?userId=269323&width=60&height=60&format=png)