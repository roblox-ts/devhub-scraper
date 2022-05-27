The Selection service controls the [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance)s that are selected in Roblox
Studio.

This service is particularly useful when developing [Plugin](https://create.roblox.com/docs/reference/engine/classes/Plugin)s, as it allows
the developer to access and manipulate the current selection.

Currently selected [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance)s can be obtained and set using the
[Selection:Get](https://create.roblox.com/docs/reference/engine/classes/Selection#Get) and [Selection:Set](https://create.roblox.com/docs/reference/engine/classes/Selection#Set) functions. The
[Selection.SelectionChanged](https://create.roblox.com/docs/reference/engine/classes/Selection#SelectionChanged) event fires whenever the current selection
changes.

For more information on using [Selection](https://create.roblox.com/docs/reference/engine/classes/Selection) and [Plugin](https://create.roblox.com/docs/reference/engine/classes/Plugin)s, see [Plugin](https://create.roblox.com/docs/reference/engine/classes/Plugin).

Selection is also often used in the command bar, to set hidden properties or
run functions for selected [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance)s. For example:

```
game.Selection:Get()[1]:SetPrimaryPartCFrame(CFrame.new()) -- move the selected model to the origin
```

Note this class only applies to Roblox Studio and has no applicability to
games.

[1]: https://developer.roblox.com/articles/Intro-to-Plugins