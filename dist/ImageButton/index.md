An ImageButton behaves similarly to an [`ImageLabel`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel) in regards to
rendering with the additional behaviors of a [`GuiButton`](https://create.roblox.com/docs/reference/engine/classes/GuiButton). It defines the
same image-rendering properties as a [`ImageLabel`](https://create.roblox.com/docs/reference/engine/classes/ImageLabel) does.

You can disable image rendering by setting
[`ImageButton.ImageTransparency`](https://create.roblox.com/docs/reference/engine/classes/ImageButton#ImageTransparency) to 1. This will leave you with a plain
rectangle that can be used as a button. However, it may be better to use a
blank [`TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton) for this.