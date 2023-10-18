This event fires when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) enters and leaves the *Jumping*
[`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType).

When a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) jumps this will fire with a *active* parameter of
*true* before shortly afterwards firing again with an active parameter of
*false*. This does not correspond with when a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) has landed.
For that, developers should listen for the *Landed*
[`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType) using [`Humanoid.StateChanged`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#StateChanged).

You can disable jumping using the [`Humanoid:SetStateEnabled()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#SetStateEnabled)
function.