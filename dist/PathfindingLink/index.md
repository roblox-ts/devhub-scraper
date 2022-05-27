**Beta Feature** This class is currently a part of the PathfindingLink beta
feature. Eligible developers must enable the feature within Studio and
functionality may change.

The code block below constructs a [PathfindingLink](https://create.roblox.com/docs/reference/engine/classes/PathfindingLink):

```lua
local link = Instance.new("PathfindingLink", myModel)
link.Attachment0 = … -- starting point of the link
link.Attachment1 = … -- end point of the link
link.Bidirectional = false
link.Label = "Boat"
```