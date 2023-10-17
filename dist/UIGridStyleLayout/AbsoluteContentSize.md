The AbsoluteContentSize property of a [`UIGridStyleLayout`](https://create.roblox.com/docs/reference/engine/classes/UIGridStyleLayout) shows how
much space the elements of the grid are taking up, including any padding
created by the grid. This property is particularly useful to size
containers of grids such as [`Frame`](https://create.roblox.com/docs/reference/engine/classes/Frame)s and Frame to make sure they
aren't any larger than the grid itself.

It updates as soon as it's read. It won't fire a changed event immediately
after the UI has changed, but if the value is read it will be up to date.
A [`Instance.Changed`](https://create.roblox.com/docs/reference/engine/classes/Instance#Changed) event should fire on the next render step.