This function returns the content URL of an image of a player's avatar
given their [`UserId`](https://create.roblox.com/docs/reference/engine/classes/Player#UserId), the desired image size as a
[`Enum.ThumbnailSize`](https://create.roblox.com/docs/reference/engine/enums/ThumbnailSize) enum, and the desired type as a [`Enum.ThumbnailType`](https://create.roblox.com/docs/reference/engine/enums/ThumbnailType)
enum. It also returns a boolean describing if the image is ready to use.

Most often, this method is used with [`ImageLabel.Image`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel#Image) or
[`Decal.Texture`](https://create.roblox.com/docs/reference/engine/classes/Decal#Texture) to display user avatar pictures in an experience.