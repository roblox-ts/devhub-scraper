The FallingDown event fires when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) enters and leaves
the *FallingDown* [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType).

The [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) will enter the *GettingUp* state 3 seconds after the
*FallingDown* state is enabled. When this happens this event will fire
with an *active* value of *false*, and [`Humanoid.GettingUp`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#GettingUp) will
fire with an *active* value of *true*.