The RightParamA property is relevant when a part's
[`BasePart.RightSurface`](https://create.roblox.com/docs/reference/engine/classes/BasePart#RightSurface) is set to Motor or SteppingMotor and
[`BasePart.RightSurfaceInput`](https://create.roblox.com/docs/reference/engine/classes/BasePart#RightSurfaceInput) is set to Sin. It determines the
**amplitude** of the motor's rotational velocity, using the following
formula:

`MotorVelocity = ParamA * math.sin(workspace.DistributedGameTime * ParamB)`

In no other cases is this property used.