The AutoButtonColor determines whether the button automatically changes
color when the user's [`Mouse`](https://create.roblox.com/docs/reference/engine/classes/Mouse) hovers over or clicks on it.

If true, the button will automatically change color when the mouse hovers
over or clicks on it. If false, the button will not change.

If you would like to customize how a button changes when the user's mouse
hovers over or clicks on it, consider using an [`ImageButton`](https://create.roblox.com/docs/reference/engine/classes/ImageButton) GUI and
changing the element's [`ImageButton.HoverImage`](https://create.roblox.com/docs/reference/engine/classes/ImageButton#HoverImage) and
[`ImageButton.PressedImage`](https://create.roblox.com/docs/reference/engine/classes/ImageButton#PressedImage).

Please note that this property will not have an effect on an
[`ImageButton`](https://create.roblox.com/docs/reference/engine/classes/ImageButton) if it's [`ImageButton.Image`](https://create.roblox.com/docs/reference/engine/classes/ImageButton#Image) property is set to
an image and is not null. Additionally, the property will not affect an
ImageButton element on mouse hover when its [`ImageButton.HoverImage`](https://create.roblox.com/docs/reference/engine/classes/ImageButton#HoverImage)
is not null nor on mouse click if [`ImageButton.PressedImage`](https://create.roblox.com/docs/reference/engine/classes/ImageButton#PressedImage) is not
null.