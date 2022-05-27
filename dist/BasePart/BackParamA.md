The BackParamA property is relevant when a part's [BasePart.BackSurface](https://create.roblox.com/docs/reference/engine/classes/BasePart#BackSurface)
is set to Motor or SteppingMotor and [BasePart.BackSurfaceInput](https://create.roblox.com/docs/reference/engine/classes/BasePart#BackSurfaceInput) is set to
Sin. It determines the **amplitude** of the motor's rotational velocity,
using the following formula:

`MotorVelocity = ParamA * math.sin(workspace.DistributedGameTime * ParamB)`

There are no other usages for this property.