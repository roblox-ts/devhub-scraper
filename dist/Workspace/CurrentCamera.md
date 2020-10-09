The [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) object being used by the local player.

How to use CurrentCamera
------------------------

This property can be set. When it is set, all other [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) objects in the [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) are destroyed, including the previous CurrentCamera. If this property is set to nil, or the CurrentCamera is otherwise destroyed, a new [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) will be created and assigned. Developers should avoid setting this property to nil or destroying the CurrentCamera however as it can have unintended consequences.

When looking for a client's [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) object, developers should use this property rather than looking for a child of [Workspace](https://developer.roblox.com/en-us/api-reference/class/Workspace) named 'Camera'.

What can be done with CurrentCamera
-----------------------------------

Accessing a client's current [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) object brings a range of uses.

*   Manipulating the viewport using the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) functions
*   Objects parented to the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) will not replicate to the server, regardless of what [Workspace.FilteringEnabled](https://developer.roblox.com/en-us/api-reference/property/Workspace/FilteringEnabled) is set to. Prior to [Workspace.FilteringEnabled](https://developer.roblox.com/en-us/api-reference/property/Workspace/FilteringEnabled), this was the main way to render [BasePart](https://developer.roblox.com/en-us/api-reference/class/BasePart)s on one client only.

Below is an example of how this property can be used to access the [Camera](https://developer.roblox.com/en-us/api-reference/class/Camera) object and increase its [Camera.FieldOfView](https://developer.roblox.com/en-us/api-reference/property/Camera/FieldOfView).

```lua
workspace.CurrentCamera.FieldOfView = 100
```