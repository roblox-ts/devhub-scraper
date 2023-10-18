This event fires when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) enters or leaves the *Freefall*
[`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType).

The *active* parameter represents whether the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is entering
or leaving the *Freefall* state.

Although the *Freefall* state generally ends when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid)
reaches the ground, this event may fire with *active* equal to *false* if
the state is changed while the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is falling. For this
reason, you should use [`Humanoid.StateChanged`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#StateChanged) and listen for the
*Landed* state to work out when a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) has landed.