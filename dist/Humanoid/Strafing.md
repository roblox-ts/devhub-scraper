This event does not fire when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is strafing and should
not be used by developers

This event is fired when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) enters or leaves the
*StrafingNoPhysics* [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType).

When the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) enters the *StrafingNoPhysics* state this event
will fire with an *active* parameter of *true*. The event will fire again
with *active* equal to *false* when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) leaves the
*StrafingNoPhysics* state.

This event is associated with the *StrafingNoPhysics* [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
state and does **not** fire when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is moving
perpendicular to the direction it is facing. This state is currently
unused, if it is set using [`Humanoid:ChangeState()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ChangeState) the state will
revert to *RunningNoPhysics*.