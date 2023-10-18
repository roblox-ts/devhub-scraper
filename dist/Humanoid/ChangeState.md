This function causes the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) to enter the given
[`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType).

The humanoid state describes the activity the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is
currently doing.

You should check the page for [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType) for more
information on what particular states do as some have unintuitive names.
For example, running describes a state where the
[`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) legs are on the ground, including when
stationary

Due to the default behavior of the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) some states will
automatically be changed when set to. For example:

- Setting the state to *'Swimming*' when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is not in
the water will lead to it being automatically set to *'GettingUp'*
- As it is unused, setting the state to *'PlatformStanding'* will lead to
it being automatically set to *'Running'*

See also:

- To enable or disable a particular state use
[`Humanoid:SetStateEnabled()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#SetStateEnabled)
- To get the current state use [`Humanoid:GetState()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#GetState)