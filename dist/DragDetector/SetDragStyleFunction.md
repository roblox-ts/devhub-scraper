Passes a function to be used if and only if
[`DragStyle`](https://create.roblox.com/docs/reference/engine/classes/DragDetector#DragStyle) is set to
[`Scriptable`](https://create.roblox.com/docs/reference/engine/enums/DragDetectorDragStyle). The given function is called when
responding to a [`DragContinue`](https://create.roblox.com/docs/reference/engine/classes/DragDetector#DragContinue) signal, it
receives the signal's world space cursor ray with type [`Ray`](https://create.roblox.com/docs/reference/engine/datatypes/Ray), and
it returns a [`CFrame`](https://create.roblox.com/docs/reference/engine/datatypes/CFrame) containing the desired location and
orientation of the pivot in world space.