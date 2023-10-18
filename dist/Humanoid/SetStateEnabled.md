This function sets whether a given [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType) is enabled for
the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid).

The humanoid state describes the activity the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is
currently doing.

When a particular [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType) is disabled, the
[`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) can never enter that state. This is true regardless if
the attempt to change state is made using [`Humanoid:ChangeState()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ChangeState)
or Roblox internal [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) code.