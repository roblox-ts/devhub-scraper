This property is used to automatically size parent UI objects based on the
size of its descendants. Developers can use this property to dynamically
add text and other content to a UI object at edit or run time, and the
size will adjust to fit that content.

When AutomaticCanvasSize is set to an
[Enum.AutomaticSize](https://developer.roblox.com/en-us/api-reference/enum/AutomaticSize) value to anything other than None,
[ScrollingFrame.CanvasSize](https://create.roblox.com/docs/reference/engine/classes/ScrollingFrame#CanvasSize) may resize depending on its child content.

For more information on how to use this property and how it works, please
see the following article: [How to use AutomaticSize][1].

[1]: https://developer.roblox.com/articles/ui-automaticsize