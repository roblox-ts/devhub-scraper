This event fires when the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) enters or leaves the
*GettingUp* [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType).

The *GettingUp* [`Enum.HumanoidStateType`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType) is a transition state that is
activated shortly after the [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) enters the *FallingDown* (3
seconds) or *Ragdoll* (1 second)
[`HumanoidStateTypes`](https://create.roblox.com/docs/reference/engine/enums/HumanoidStateType).

When a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) attempts to get back up, this event will first
fire with an *active* parameter of *true* before shortly after firing
again with an *active* parameter of *false*.

See also:

- To force a [`Humanoid`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) to fall over, use the
[`Humanoid:ChangeState()`](https://create.roblox.com/docs/reference/engine/classes/Humanoid#ChangeState) function to change the
[`Humanoid's`](https://create.roblox.com/docs/reference/engine/classes/Humanoid) state to *FallingDown*