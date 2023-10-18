The maximum torque used to keep the [`ControllerManager.RootPart`](https://create.roblox.com/docs/reference/engine/classes/ControllerManager#RootPart)
aligned upright. When misaligned, this amount of torque is applied to
reach the [`BalanceSpeed`](https://create.roblox.com/docs/reference/engine/classes/GroundController#BalanceSpeed) and realign
the root part. A higher torque means more force is required to cause the
root part to tilt. A lower torque means it's easer for the root part to
get knocked over when running into things. This property is hidden and has
no effect when [`ControllerBase.BalanceRigidityEnabled`](https://create.roblox.com/docs/reference/engine/classes/ControllerBase#BalanceRigidityEnabled) is true.