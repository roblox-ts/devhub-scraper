This event fires when the state of the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is changed.

The humanoid state describes the activity the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is
currently doing. It takes the form of a [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType) value.

See also:

- To get and set the state use [`Humanoid:GetState()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#GetState) and
[`Humanoid:ChangeState()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ChangeState)
- Individual states can be disabled using
[`Humanoid:SetStateEnabled()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#SetStateEnabled)
- As there is no idle humanoid state, you should instead use the
[`Humanoid.Running`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#Running) event or listen to the
[`RootPart's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#RootPart) [`BasePart.Velocity`](https://create.roblox.com/docs/reference/engine/classes/BasePart#Velocity) to work
out when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) is standing still