The maximum torque the character can use to remain balanced upright. When
misaligned, this amount of torque is applied to reach the
[`BalanceSpeed`](https://create.roblox.com/docs/reference/engine/classes/AirController#BalanceSpeed) and realign the character.
A higher torque means more force is required to cause the character to
tilt. A lower torque means it's easer for the character to flip in the
air. This property is hidden and has no effect when
[`ControllerBase.BalanceRigidityEnabled`](https://create.roblox.com/docs/reference/engine/classes/ControllerBase#BalanceRigidityEnabled) is true.