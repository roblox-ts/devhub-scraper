![](https://developer.roblox.com/assets/blt0ae8e57f698df61c/ClickDetector.png) ![](https://developer.roblox.com/assets/bltdd49f2456410d52e/ClickDetector2.png)

**ClickDetector** allows [Scripts](https://developer.roblox.com/en-us/api-reference/class/Script) and [LocalScripts](https://developer.roblox.com/en-us/api-reference/class/LocalScript) to receive pointer input on 3D objects through their [MouseClick](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/MouseClick) event. They work when parented to [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart), [Model](https://developer.roblox.com/en-us/api-reference/class/Model) or [Folder](https://developer.roblox.com/en-us/api-reference/class/Folder) objects. They detect basic mouse events: enter, leave, left click and right click. Touch input on [TouchEnabled](https://developer.roblox.com/en-us/api-reference/property/UserInputService/TouchEnabled) devices also fires click events.

The default control scripts bind the ButtonR2 [KeyCode](https://developer.roblox.com/en-us/api-reference/enum/KeyCode) to interact with ClickDetectors using [ContextActionService:BindActivate](https://developer.roblox.com/en-us/api-reference/function/ContextActionService/BindActivate), which can also be used to override this. When using gamepads, the center dot triggers [MouseHoverEnter](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/MouseHoverEnter)/[MouseHoverLeave](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/MouseHoverLeave). The bound activation button fires [MouseClick](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/MouseClick).

Below is a simple template script for working with ClickDetectors. Paste it into a [Script](https://developer.roblox.com/en-us/api-reference/class/Script) or a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript).

```lua
local clickDetector = workspace.Part.ClickDetector

function onMouseClick()
    print("You clicked me!")
end

clickDetector.MouseClick:connect(onMouseClick)
``` 

[MaxActivationDistance](https://developer.roblox.com/en-us/api-reference/property/ClickDetector/MaxActivationDistance) can be used to limit the distance a player may be from a ClickDetector object before it is no longer clickable.

ClickDetector events fire on both the client and the server, even when [FilteringEnabled](https://developer.roblox.com/en-us/api-reference/property/Workspace/FilteringEnabled) is on. Since a [LocalScript](https://developer.roblox.com/en-us/api-reference/class/LocalScript) will only run if descends from a [Player](https://developer.roblox.com/en-us/api-reference/class/Player) or Player's [Character](https://developer.roblox.com/en-us/api-reference/property/Player/Character), it's usually not useful to put a LocalScript inside a ClickDetector (since the script won't run, or the object won't be clickable). If you need a LocalScript to detect ClickDetector events, [StarterPlayerScripts](https://developer.roblox.com/en-us/api-reference/class/StarterPlayerScripts) may be a better place instead.

Input Priority
--------------

If multiple ClickDetectors would detect a user input, only the deepest ClickDetector will fire events. If an action bound with [ContextActionService](https://developer.roblox.com/en-us/api-reference/class/ContextActionService) uses the same input as a ClickDetector, the action bound with ContextActionService will take priority over ClickDetector events. If two ClickDetectors are siblings, the first ClickDetector will take priority. [UserInputService.InputBegan](https://developer.roblox.com/en-us/api-reference/event/UserInputService/InputBegan) will fire before ClickDetector events. Due to the nature of user input, you ought not depend on all [MouseHoverEnter](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/MouseHoverEnter) events to fire a matching [MouseHoverLeave](https://developer.roblox.com/en-us/api-reference/event/ClickDetector/MouseHoverLeave) event.