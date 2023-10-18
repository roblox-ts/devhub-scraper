The GetStateEnabled function returns whether a [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType) is
enabled for the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid).

The humanoid state describes the activity the humanoid is currently doing.

When a particular [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType) is disabled, the humanoid can
never enter that state. This is true regardless if the attempt to change
state is made using [`Humanoid:ChangeState()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ChangeState) or Roblox internal
humanoid code.

See also:

- For an event that fires when a humanoid state is enabled or disabled see
[`Humanoid.StateEnabledChanged`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#StateEnabledChanged)
- To enable or disable a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) state use
[`Humanoid:SetStateEnabled()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#SetStateEnabled)