The Selection service controls the [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)s that are selected in Roblox Studio.

This service is particularly useful when developing [Plugin](https://developer.roblox.com/en-us/api-reference/class/Plugin)s, as it allows the developer to access and manipulate the current selection.

Currently selected [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)s can be obtained and set using the [Selection:Get](https://developer.roblox.com/en-us/api-reference/function/Selection/Get) and [Selection:Set](https://developer.roblox.com/en-us/api-reference/function/Selection/Set) functions. The [Selection.SelectionChanged](https://developer.roblox.com/en-us/api-reference/event/Selection/SelectionChanged) event fires whenever the current selection changes.

For more information on using Selection and [Plugin](https://developer.roblox.com/en-us/api-reference/class/Plugin)s please see `Articles/Intro to Plugins|this tutorial`.

Selection is also often used in the command bar, to set hidden properties or run functions for selected [Instance](https://developer.roblox.com/en-us/api-reference/class/Instance)s. For example:

```lua
game.Selection:Get()[1]:SetPrimaryPartCFrame(CFrame.new()) -- move the selected model to the origin
``` 

Note this class only applies to Roblox Studio and has no applicability to games.