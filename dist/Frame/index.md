Frame is a [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject) that renders as a plain rectangle with no other
content. They are the simplest concrete example of a [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject), as they
provide very little additional functionality (`Frame.FrameStyle`). Despite
this, Frames are useful as containers for other [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject)s, such as
[TextLabel](https://create.roblox.com/docs/reference/engine/classes/TextLabel), [ImageLabel](https://create.roblox.com/docs/reference/engine/classes/ImageLabel). The key benefit to using a Frame over a [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder) as
a container object is the ability to further manipulate the `GuiObject.Size`
and `GuiObject.Position` of any descendant [GuiObject](https://create.roblox.com/docs/reference/engine/classes/GuiObject)s.