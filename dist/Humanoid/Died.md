This event fires when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) dies, usually when
[`Humanoid.Health`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Health) reaches 0. This could be caused either by
disconnecting their head from their [`Humanoid.Torso`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Torso), or directly
setting the health property.

This event only fires if the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is a descendant of the
[`Workspace`](https://create.roblox.com/docs/reference/engine/classes/Workspace). If the *Dead* [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType) is disabled it
will not fire.