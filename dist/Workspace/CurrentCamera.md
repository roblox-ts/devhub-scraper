The [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera) object being used by the local player.

#### How to use CurrentCamera

This property can be set. When it is set, all other [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera) objects in
the [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace) are destroyed, including the previous CurrentCamera. If
this property is set to nil, or the CurrentCamera is otherwise destroyed,
a new [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera) will be created and assigned. Developers should avoid
setting this property to nil or destroying the CurrentCamera however as it
can have unintended consequences.

When looking for a client's [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera) object, developers should use this
property rather than looking for a child of [Workspace](https://create.roblox.com/docs/reference/engine/classes/Workspace) named 'Camera'.

#### What can be done with CurrentCamera

Accessing a client's current [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera) object brings a range of uses.

- Manipulating the viewport using the [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera) functions
- Objects parented to the [Camera](https://create.roblox.com/docs/reference/engine/classes/Camera) will not replicate to the server,
  regardless of what [Workspace.FilteringEnabled](https://create.roblox.com/docs/reference/engine/classes/Workspace#FilteringEnabled) is set to. Prior to
  [Workspace.FilteringEnabled](https://create.roblox.com/docs/reference/engine/classes/Workspace#FilteringEnabled), this was the main way to render
  [BasePart](https://create.roblox.com/docs/reference/engine/classes/BasePart)s on one client only.

Below is an example of how this property can be used to access the
[Camera](https://create.roblox.com/docs/reference/engine/classes/Camera) object and increase its [Camera.FieldOfView](https://create.roblox.com/docs/reference/engine/classes/Camera#FieldOfView).

```
workspace.CurrentCamera.FieldOfView = 100
```