The StateEnableChanged event fires when [`Humanoid:SetStateEnabled()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#SetStateEnabled)
is called on the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid).

Parameters include the [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType) in question along with a
bool indicating if this state is now enabled.

See also:

- To find if a state is currently enabled, use
[`Humanoid:GetStateEnabled()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#GetStateEnabled)
- To listen to [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) state changes use
[`Humanoid.StateChanged`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#StateChanged)