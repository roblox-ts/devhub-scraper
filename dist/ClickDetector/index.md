![undefined](https://prod.docsiteassets.roblox.com/assets/blt0ae8e57f698df61c/ClickDetector.png)
![undefined](https://prod.docsiteassets.roblox.com/assets/bltdd49f2456410d52e/ClickDetector2.png)

**ClickDetector** allows [Scripts](https://create.roblox.com/docs/reference/engine/classes/Script) and [LocalScripts](https://create.roblox.com/docs/reference/engine/classes/LocalScript) to
receive pointer input on 3D objects through their
[MouseClick](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseClick) event. They work when parented to
[BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart), [Model](https://create.roblox.com/docs/reference/engine/classes/Model) or [Folder](https://create.roblox.com/docs/reference/engine/classes/Folder) objects. They detect
basic mouse events: enter, leave, left click and right click. Touch input on
[TouchEnabled](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) devices also fires click events.

The default control scripts bind the ButtonR2 [KeyCode](https://developer.roblox.com/en-us/api-reference/enum/KeyCode) to interact with
ClickDetectors using [ContextActionService:BindActivate](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindActivate), which can also be
used to override this. When using gamepads, the center dot triggers
[MouseHoverEnter](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseHoverEnter)/[MouseHoverLeave](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseHoverLeave).
The bound activation button fires [MouseClick](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseClick).

Below is a simple template script for working with ClickDetectors. Paste it
into a [Script](https://create.roblox.com/docs/reference/engine/classes/Script) or a [LocalScript](https://create.roblox.com/docs/reference/engine/classes/LocalScript).

```lua
local clickDetector = workspace.Part.ClickDetector

function onMouseClick()
	print("You clicked me!")
end

clickDetector.MouseClick:connect(onMouseClick)
```

`ClickDetector/MaxActivationDistance|MaxActivationDistance` can be used to
limit the distance a player may be from a ClickDetector object before it is no
longer clickable.

ClickDetector events fire on both the client and the server. Since a
`LocalScript` will only run if it descends from a `Player` or Player's
`Player/Character|Character`, it's usually not useful to put a LocalScript
inside a ClickDetector since the script won't run, or the object won't be
clickable. If you need a LocalScript to detect ClickDetector events,
`StarterPlayerScripts` may be a better place instead.

## Input Priority

If multiple ClickDetectors would detect a user input, only the deepest
ClickDetector will fire events. If an action bound with `ContextActionService`
uses the same input as a ClickDetector, the action bound with
ContextActionService will take priority over ClickDetector events. If two
ClickDetectors are siblings, the first ClickDetector will take priority.
`UserInputService/InputBegan` will fire before ClickDetector events. Due to
the nature of user input, you ought not depend on all
`ClickDetector/MouseHoverEnter|MouseHoverEnter` events to fire a matching
`ClickDetector/MouseHoverLeave|MouseHoverLeave` event.