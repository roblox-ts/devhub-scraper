This function lowers the [`Humanoid.Health`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Health) of the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
by the given *amount* if it is not protected by a [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField)

This function accepts negative values for the *amount* parameter. This
will increase the humanoid's [`Humanoid.Health`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Health). However this will
only have an effect if no [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) is present.
#### How do ForceFields protect against TakeDamage

A [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is considered protected by a [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) if a
[`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) meets one of the following criteria:

- The [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) shares the same [`Instance.Parent`](https://create.roblox.com/docs/reference/engine/classes/Instance#Parent) as the
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
- The [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) is parented to the [`Humanoid.RootPart`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#RootPart) of
the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
- The [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) is parented to an ancestor of the
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) other than the [`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace)

To do damage to a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) irrespective of any
[`ForceFields`](https://create.roblox.com/docs/reference/engine/classes/ForceField) present, set [`Humanoid.Health`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Health)
directly.

For more information on how [`ForceFields`](https://create.roblox.com/docs/reference/engine/classes/ForceField) protect
[`Humanoids`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) see the [`ForceField`](https://create.roblox.com/docs/reference/engine/classes/ForceField) page