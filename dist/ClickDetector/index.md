**ClickDetector** allows [`Scripts`](https://create.roblox.com/docs/reference/engine/classes/Script) and
[`LocalScripts`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) to receive pointer input on 3D objects
through their [`MouseClick`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseClick) event. They work
when parented to [`BasePart`](https://create.roblox.com/docs/reference/engine/classes/BasePart), [`Model`](https://create.roblox.com/docs/reference/engine/classes/Model), or [`Folder`](https://create.roblox.com/docs/reference/engine/classes/Folder) objects.
They detect basic mouse events: enter, leave, left click and right click.
Touch input on [`TouchEnabled`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#TouchEnabled) devices also
fires click events.

The default control scripts bind [`ButtonR2`](https://create.roblox.com/docs/reference/engine/enums/KeyCode) to interact with
[`ClickDetectors`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector) using
[`ContextActionService:BindActivate()`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService#BindActivate), which can also be used to
override this. When using gamepads, the center dot triggers
[`MouseHoverEnter`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseHoverEnter) and
[`MouseHoverLeave`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseHoverLeave). The bound activation
button fires [`MouseClick`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MouseClick).

[`MaxActivationDistance`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector#MaxActivationDistance) can be used
to limit the distance a player may be from a click detector before it is no
longer clickable.

[`ClickDetector`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector) events fire on both the client and the server. Since a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) will only run if it descends from a [`Player`](https://create.roblox.com/docs/reference/engine/classes/Player) or
player [`Character`](https://create.roblox.com/docs/reference/engine/classes/Player#Character), it's usually not useful to put a
[`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) inside a [`ClickDetector`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector), since the script won't run
or the object won't be clickable. If you need a [`LocalScript`](https://create.roblox.com/docs/reference/engine/classes/LocalScript) to detect
[`ClickDetector`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector) events, [`StarterPlayerScripts`](https://create.roblox.com/docs/reference/engine/classes/StarterPlayerScripts) may be a better
place instead.
#### Input Priority

If multiple [`ClickDetectors`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector) may detect user input, only
the deepest will fire events. If two [`ClickDetectors`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector) are
siblings, the first will take priority.

If an action bound with [`ContextActionService`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService) uses the same input as a
[`ClickDetector`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector), the action bound with [`ContextActionService`](https://create.roblox.com/docs/reference/engine/classes/ContextActionService) will
take priority over the click detector's events.

[`UserInputService.InputBegan`](https://create.roblox.com/docs/reference/engine/classes/UserInputService#InputBegan) will fire before [`ClickDetector`](https://create.roblox.com/docs/reference/engine/classes/ClickDetector)
events.