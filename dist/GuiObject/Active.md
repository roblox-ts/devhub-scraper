This property determines whether a [`GuiObject`](https://create.roblox.com/docs/reference/engine/classes/GuiObject) will sink input to 3D
space, such as underlying models with a [`ClickDetector`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector). In other
words, if the player attempts to click a ClickDetector with the mouse
hovering over an Active UI element, the UI will block the input from
reaching the ClickDetector.

For [`GuiButton`](https://create.roblox.com/docs/reference/engine/classes/GuiButton) objects ([`ImageButton`](https://create.roblox.com/docs/reference/engine/classes/ImageButton) and
[`TextButton`](https://create.roblox.com/docs/reference/engine/classes/TextButton)), this property determines whether
[`GuiButton.Activated`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#Activated) fires ([`GuiButton.AutoButtonColor`](https://create.roblox.com/docs/reference/engine/classes/GuiButton#AutoButtonColor) will
still work for those as well). The events
[`InputBegan`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#InputBegan),
[`InputChanged`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#InputChanged), and
[`InputEnded`](https://create.roblox.com/docs/reference/engine/classes/GuiObject#InputEnded) work as normal no matter the value
of this property.