This event fires when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) enters or leaves the *Ragdoll*
[`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType).

The `active` parameter will have the value `true` or `false` to indicate
entering or leaving.

Use [`Humanoid:SetStateEnabled()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#SetStateEnabled) to disable the GettingUp state to
stay in the Ragdoll state.

See also:

- [`Humanoid.FallingDown`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#FallingDown) for the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) event connected
with the *FallingDown* state, which behaves similarly to *Ragdoll*