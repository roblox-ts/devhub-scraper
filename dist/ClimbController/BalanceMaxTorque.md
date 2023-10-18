The maximum torque used to keep the [`ControllerManager.RootPart`](https://create.roblox.com/docs/reference/engine/classes/ControllerManager#RootPart)
aligned upright and aligned to the
[`ControllerManager.ClimbSensor`](https://create.roblox.com/docs/reference/engine/classes/ControllerManager#ClimbSensor). When misaligned, this
amount of torque is applied to reach the
[`BalanceSpeed`](https://create.roblox.com/docs/reference/engine/classes/ClimbController#BalanceSpeed) and realign the root
part. A higher torque means more force is required to cause the root part
to tilt. This property is hidden and has no effect when
[`ControllerBase.BalanceRigidityEnabled`](https://create.roblox.com/docs/reference/engine/classes/ControllerBase#BalanceRigidityEnabled) is true.