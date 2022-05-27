GuiObject is an abstract class (much like [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)) for a 2D user interface
object. It defines all the properties relating to the display of a graphical
user interface (GUI) object such as [GuiObject.Size](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Size) and [GuiObject.Position](https://create.roblox.com/docs/reference/engine/classes/GuiObject#Position).
It also has some useful read-only properties like
[GuiObject.AbsolutePosition](https://create.roblox.com/docs/reference/engine/classes/GuiObject#AbsolutePosition), [GuiObject.AbsoluteSize](https://create.roblox.com/docs/reference/engine/classes/GuiObject#AbsoluteSize), and
[GuiObject.AbsoluteRotation](https://create.roblox.com/docs/reference/engine/classes/GuiObject#AbsoluteRotation). It should be noted that [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject) can have
negative sizes and render normally, though [GuiObject.AnchorPoint](https://create.roblox.com/docs/reference/engine/classes/GuiObject#AnchorPoint) ought to be
used to better control rendering.

To manipulate the layout of a GuiObject in special ways, you can use a
[UIComponent](https://create.roblox.com/docs/reference/engine/classes/UIComponent) class such as [UIListLayout](https://create.roblox.com/docs/reference/engine/classes/UIListLayout), [UIPadding](https://create.roblox.com/docs/reference/engine/classes/UIPadding) or [UIScale](https://create.roblox.com/docs/reference/engine/classes/UIScale).

This class defines very simple animation methods: [GuiObject:TweenPosition](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TweenPosition),
[GuiObject:TweenSize](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TweenSize) and [GuiObject:TweenSizeAndPosition](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TweenSizeAndPosition) are good
alternatives to [TweenService](https://create.roblox.com/docs/reference/engine/classes/TweenService) for beginners.

GuiObject also defines events for user input like [GuiObject.MouseEnter](https://create.roblox.com/docs/reference/engine/classes/GuiObject#MouseEnter),
[GuiObject.TouchTap](https://create.roblox.com/docs/reference/engine/classes/GuiObject#TouchTap), [GuiObject.InputBegan](https://create.roblox.com/docs/reference/engine/classes/GuiObject#InputBegan), [GuiObject.InputChanged](https://create.roblox.com/docs/reference/engine/classes/GuiObject#InputChanged) and
[GuiObject.InputEnded](https://create.roblox.com/docs/reference/engine/classes/GuiObject#InputEnded). The last three of these mimic the events of
`UserinputService` of the same name. Although it is possible to detect mouse
button events on any GuiObject using [GuiObject.InputBegan](https://create.roblox.com/docs/reference/engine/classes/GuiObject#InputBegan), only
[ImageButton](https://create.roblox.com/docs/reference/engine/classes/ImageButton) and [TextButton](https://create.roblox.com/docs/reference/engine/classes/TextButton) have dedicated events for these (e.g.
[TextButton.MouseButton1Down](https://create.roblox.com/docs/reference/engine/classes/TextButton#MouseButton1Down)). This event ought not be used for general
button activation since not all platforms use a mouse; see
[TextButton.Activated](https://create.roblox.com/docs/reference/engine/classes/TextButton#Activated).